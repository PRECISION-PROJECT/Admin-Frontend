import { Card } from "@/components/ui/card";
import { SigninHeaderUI } from "../../components";
import SigninFormContainer from "../signin-form-container";

const SigninContainer = () => {
  return (
    <Card className="w-full max-w-md auth-card">
      <SigninHeaderUI />
      <SigninFormContainer />
    </Card>
  );
};

export default SigninContainer;
