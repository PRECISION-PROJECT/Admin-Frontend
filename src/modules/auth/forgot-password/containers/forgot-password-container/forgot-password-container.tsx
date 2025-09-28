import { Card } from "@/components/ui/card";
import { ForgotPasswordHeaderUI } from "../../components";
import ForgotPasswordFormContainer from "../forgot-password-form-container";

const ForgotPasswordContainer = () => {
  return (
    <Card className="w-full max-w-md auth-card">
      <ForgotPasswordHeaderUI />
      <ForgotPasswordFormContainer />
    </Card>
  );
};

export default ForgotPasswordContainer;
