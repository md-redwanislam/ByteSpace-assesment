import avatar1 from "@/public/h_image-1.png";
import avatar2 from "@/public/h_image-2.png";
import avatar3 from "@/public/h_image-3.png";
import avatar4 from "@/public/h_image-4.png";
import avatar5 from "@/public/h_image-5.png";
import avatar6 from "@/public/h_image-6.png";
import avatar7 from "@/public/h_image-7.png";
import Image from "next/image";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7];
const HappCardAvatar = () => {
  return (
    <>
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          src={avatar}
          alt="Avatar"
          className="-ml-3 h-[43px] w-[39px] rounded-full border-2 object-cover first:ml-0"
        />
      ))}
    </>
  );
};

export default HappCardAvatar;
