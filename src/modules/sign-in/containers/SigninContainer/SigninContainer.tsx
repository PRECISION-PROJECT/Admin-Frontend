import { SigninHeaderUI } from "../../components";
import SigninFormContainer from "../SigninFormContainer";

const SigninContainer = () => {
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <SigninHeaderUI />
        <SigninFormContainer />
      </div>
    </div>
  );
};

export default SigninContainer;
