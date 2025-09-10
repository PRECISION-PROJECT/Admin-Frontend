import ResetPasswordFooterUI from "../../components/ResetPasswordFooterUI";
import ResetPasswordHeaderUI from "../../components/ResetPasswordHeaderUI";
import ResetPasswordFormContainer from "../ResetPasswordFormContainer/ResetPasswordFormContainer";

interface ResetPasswordContainerProps {
  email: string;
}

const ResetPasswordContainer = ({ email }: ResetPasswordContainerProps) => {
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <ResetPasswordHeaderUI email={email} />
        <div>
          <ResetPasswordFormContainer email={email} />
          <ResetPasswordFooterUI />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordContainer;
