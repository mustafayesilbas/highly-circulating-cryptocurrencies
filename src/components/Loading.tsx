import { FC } from "react";

interface IProps {
  loading: boolean;
}

const Loading: FC<IProps> = ({ loading, children }) => {
  if (loading) return <h2>Loading . . .</h2>;
  else {
    return <>{children}</>;
  }
};

export default Loading;
