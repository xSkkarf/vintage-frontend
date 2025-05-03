import { TLoading } from "../../types/types";

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <p>Loading....</p>;
  } else if (status === "failed") {
    return <p>{error}</p>;
  }

return <>{children}</>;
};

export default Loading;
