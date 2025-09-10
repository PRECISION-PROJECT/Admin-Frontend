import ForgotPasswordFooterUI from "../../components/ForgotPasswordFooterUI";
import ForgotPasswordHeaderUI from "../../components/ForgotPasswordHeaderUI";
import ForgotPasswordFormContainer from "../ForgotPasswordFormContainer/ForgotPasswordFormContainer";

const ForgotPasswordContainer = () => {
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <ForgotPasswordHeaderUI />
        <div>
          <ForgotPasswordFormContainer />
          <ForgotPasswordFooterUI />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordContainer;
