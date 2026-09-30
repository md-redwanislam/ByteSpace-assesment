import avatar1 from "@/public/h_image-2.png";
import avatar2 from "@/public/h_image-8.png";
import avatar4 from "@/public/h_image-9.png";
import avatar3 from "@/public/test-1.png";
import Image from "next/image";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const CourseAvatar = () => {
  return (
    <>
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          src={avatar}
          alt="Avatar"
          className="-ml-3 h-[43px] w-[43px] rounded-full border-2  object-cover first:ml-0"
        />
      ))}
    </>
  );
};

export default CourseAvatar;
