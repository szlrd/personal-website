import { PropsWithChildren, forwardRef } from "react";

const ContentContainer = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div className="py-6 first:pt-12 scroll-mt-14" ref={ref}>
        {children}
      </div>
    );
  }
);

ContentContainer.displayName = "ContentContainer";

export default ContentContainer;
