"use client";

import { useGetProfile } from "@/apis/auths";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { defaultValues, ProfileFormData, profileSchema } from "./validation";

export const useProfile = () => {
  const { data, isLoading, refetch } = useGetProfile({});

  const formMethods = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (data) {
      formMethods.reset(data);
    }
  }, [data]);

  return {
    profile: data,
    isLoading,
    refetch,
    formMethods,
  };
};
