import React from "react";
import { ResetPasswordContainer } from "./containers";

type Props = {
  email: string;
  hash: string;
};

const ResetPasswordModule = (props: Props) => {
  return <ResetPasswordContainer email={props.email} hash={props.hash} />;
};
export default ResetPasswordModule;
