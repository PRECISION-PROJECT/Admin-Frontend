"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { IOption } from "@/types";
import {
  FileUploadConfig,
  InputFileDropzoneUploadField,
} from "./input-file-dropzone-field";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TextField } from "./text-field";
import { TextAreaField } from "./textarea-field";
import { SwitchField } from "./switch-field";
import { RadioGroupField } from "./radio-group-field";
import { CheckboxGroupField } from "./checkbox-group-field";
import { DatePickerField } from "./date-picker-field";
import { CheckboxField } from "./checkbox-field";
import { SelectField } from "./select-field";
import { FormWrapper } from "../ui/form";

// Demo form schema
const demoFormSchema = z.object({
  // Basic inputs
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
  password: z.string().min(8, "Password must be at least 8 characters"),

  // Textarea
  bio: z.string().min(10, "Bio must be at least 10 characters"),

  // Select
  country: z.string().min(1, "Please select a country"),

  // Checkbox group
  interests: z.array(z.string()).min(1, "Select at least one interest"),

  // Radio group
  gender: z.string().min(1, "Please select gender"),

  // Switch
  newsletter: z.boolean(),

  // // Slider
  // rating: z.number().min(0).max(10),

  // Date picker
  birthDate: z.date().optional(),

  // Single checkbox
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),

  // File upload
  avatar: z.array(z.any()).optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

// Demo options
const countryOptions: IOption<string>[] = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

const interestOptions: IOption<string>[] = [
  { value: "technology", label: "Technology" },
  { value: "sports", label: "Sports" },
  { value: "music", label: "Music" },
  { value: "travel", label: "Travel" },
  { value: "cooking", label: "Cooking" },
  { value: "reading", label: "Reading" },
];

const genderOptions: IOption<string>[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

const fileUploadConfig: FileUploadConfig = {
  maxSize: 5000000, // 5MB
  acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  multiple: false,
  maxFiles: 1,
};

export default function DemoForm() {
  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      password: "",
      bio: "",
      country: "",
      interests: [],
      gender: "",
      newsletter: false,
      // rating: 5,
      birthDate: undefined,
      terms: false,
      avatar: [],
    },
  });
  console.log("🚀 ~ DemoForm ~ form:", form.getValues('age'), form.formState.errors);

  const onSubmit = (data: DemoFormData) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Reusable Form Components Demo
          </CardTitle>
          <p className="text-muted-foreground">
            See how these components reduce boilerplate from 15+ lines to just
            5-8 lines per field
          </p>
        </CardHeader>
        <CardContent>
          <FormWrapper form={form} onSubmit={onSubmit}>
            {/* Basic Inputs */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <TextField
                control={form.control}
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                required
              />

              <TextField
                control={form.control}
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                required
              />

              <TextField
                control={form.control}
                name="age"
                type="number"
                label="Age"
                min={18}
                max={100}
                required
              />

              <TextField
                control={form.control}
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Textarea */}
            <TextAreaField
              control={form.control}
              name="bio"
              label="Bio"
              placeholder="Tell us about yourself..."
              config={{
                maxLength: 500,
                showCharCount: true,
                rows: 4,
              }}
              required
            />

            {/* Select */}
            <SelectField
              control={form.control}
              name="country"
              label="Country"
              placeholder="Select your country"
              options={countryOptions}
              required
            />

            {/* Checkbox Group */}
            <CheckboxGroupField
              control={form.control}
              name="interests"
              label="Interests"
              description="Select all that apply"
              options={interestOptions}
              columns={3}
              showBadges={true}
              required
            />

            {/* Radio Group */}
            <RadioGroupField
              control={form.control}
              name="gender"
              label="Gender"
              options={genderOptions}
              orientation="horizontal"
              required
            />

            {/* Switch */}
            <SwitchField
              control={form.control}
              name="newsletter"
              label="Subscribe to Newsletter"
            />

            {/* Date Picker */}
            <DatePickerField
              control={form.control}
              name="birthDate"
              label="Birth Date"
              description="Your date of birth (optional)"
              config={{
                maxDate: new Date(),
                placeholder: "Select your birth date",
              }}
            />

            {/* Single Checkbox */}
            <CheckboxField
              control={form.control}
              name="terms"
              label="I agree to the Terms and Conditions"
              required
            />

            {/* File Upload */}
            <InputFileDropzoneUploadField
              control={form.control}
              name="avatar"
              label="Profile Picture"
              description="Upload a profile picture (optional)"
              config={fileUploadConfig}
            />

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit Form
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="flex-1"
              >
                Reset
              </Button>
            </div>
          </FormWrapper>
        </CardContent>
      </Card>

      {/* Form Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Form Data Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted overflow-auto rounded-lg p-4 text-sm">
            {JSON.stringify(form.watch(), null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
