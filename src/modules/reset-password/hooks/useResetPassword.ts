import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPasswordSchema, type ResetPasswordFormData } from "./validation";

interface UseResetPasswordProps {
  email: string;
}

export const useResetPassword = ({ email }: UseResetPasswordProps) => {
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      const payload = {
        ...data,
        email,
      };
      console.log("Reset password data:", payload);
      // TODO: Implement actual reset password logic here
      // await resetPasswordAPI(data);
    } catch (error) {
      console.error("Reset password error:", error);
    }
  };

  return {
    form,
    onSubmit,
  };
};
