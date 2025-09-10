import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "./validation";

export const useForgotPassword = () => {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      console.log("Forgot password data:", data);
      // TODO: Implement actual forgot password logic here
      // await forgotPasswordAPI(data);
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

  return {
    form,
    onSubmit,
  };
};
