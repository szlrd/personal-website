import { PropsWithChildren } from "react";

const ContentContainer = ({ children }: PropsWithChildren) => {
  return <div className="py-6 first:pt-0">{children}</div>;
};

export default ContentContainer;
