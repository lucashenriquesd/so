import Image, { StaticImageData } from "next/image";

type DesktopItemProps = {
  image: StaticImageData | string;
  name: string;
};

export default function DesktopItem(props: DesktopItemProps) {
  return (
    <div className="flex flex-col items-center whitespace-nowrap">
      {props.image && (
        <Image
          draggable="false"
          src={props.image}
          alt={props.name}
          width={45}
          height={1}
        />
      )}
      <span className="text-[#c2f0f9] cursor-default select-none">
        {props.name}
      </span>
    </div>
  );
}
