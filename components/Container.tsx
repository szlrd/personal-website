import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto bg-gray-900">{children}</div>;
};

export default Container;
