import { PropsWithChildren } from "react";

type ContainerType = {
  className?: string;
};

const Container = ({
  children,
  className,
}: PropsWithChildren<ContainerType>) => {
  return (
    <div
      className={`px-4 lg:px-64 md:px-32 container mx-auto ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
