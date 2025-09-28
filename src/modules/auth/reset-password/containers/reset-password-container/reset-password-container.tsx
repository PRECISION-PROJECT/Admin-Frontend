import { Card } from "@/components/ui/card";
import { ResetPasswordHeaderUI } from "../../components";
import ResetPasswordFormContainer from "../reset-password-form-container";

type Props = {
  email: string;
  hash: string;
};

const ResetPasswordContainer = (props: Props) => {
  return (
    <Card className="w-full max-w-md auth-card">
      <ResetPasswordHeaderUI email={props.email} />
      <ResetPasswordFormContainer email={props.email} hash={props.hash} />
    </Card>
  );
};

export default ResetPasswordContainer;
