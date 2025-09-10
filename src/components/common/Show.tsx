import { FCC } from "@/types";

type Props = {
  when?: boolean;
};

const Show: FCC<Props> = (props) => {
  return <>{props.when ? <>{props.children}</> : null}</>;
};

export default Show;
