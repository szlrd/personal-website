import Image from "next/image";
import ContentContainer from "../ContentContainer";
import { forwardRef } from "react";

const BioBlock = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ContentContainer ref={ref}>
      <div className="gap-12 flex items-center">
        <Image
          src="/portrait.jpg"
          alt="My portrait"
          width={128}
          height={128}
          className="h-[128px] w-[128px]"
        />
        <div className="w-full">
          <div className="text-3xl py-8 self-center">Farkas Szilárd</div>
          Donec non quam id libero dignissim cursus eget ut ex. Curabitur
          finibus sem sed velit ornare rutrum. Curabitur finibus ultricies
          posuere. Proin vel odio ultrices, elementum purus viverra,
          pellentesque nisi. Vestibulum ac faucibus justo. Aenean vehicula
          posuere felis at venenatis. Nullam venenatis odio id fringilla varius.
          Sed porta lobortis tortor nec convallis. Ut pharetra vehicula augue,
          quis blandit ex pharetra eu. Aenean vitae consequat diam, eget
          molestie tortor. Phasellus id convallis diam, volutpat auctor felis.
          Mauris ultricies euismod tellus in tempor. Phasellus hendrerit egestas
          interdum.
        </div>
      </div>
    </ContentContainer>
  );
});

BioBlock.displayName = "BioBlock";

export default BioBlock;
