import { TextAnimate } from "@/components/magicui/text-animate";
import linkedin from "../assets/images/LinkedIn_logo_initials.png";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type member ={
    name: string;
    position:string;
  imageUrl: string;
  linkedIn:string;
}

interface profileProps {
    member: member;
  idx: number;
}

const ProfileCard = ({ member, idx }: profileProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <BlurFade key={member.imageUrl} delay={0.25 + idx * 0.05} inView>
      <div
        className=" relative hover:cursor-pointer "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img className="mb-4  h-72  rounded-lg object-contain" src={member.imageUrl} />
        {hovered  && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "7rem",
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.1,
                },
              }}
              //   animate={{

              //   }}
              //   exit={{
              //     scale: 0,
              //     transition: {
              //       type: "spring",
              //       duration: 0.5,
              //       bounce: 0.1,
              //     },
              //   }}
              className="absolute bottom-0 left-0 w-full h-24 rounded-t-[80px] p-5 flex flex-col justify-center items-center gap-2 bg-[#ffffff52] "
            >
              <TextAnimate
                className="text-xl text-center font-text-secondary ] "
                animation="slideUp"
                by="word"
              >
                {member.name}
              </TextAnimate>
              <TextAnimate
                className="text-center font-text-primary text-[#5EC2B5] "
                animation="fadeIn"
                by="line"
                as="p"
                duration={2}
              >
                {member.position}
              </TextAnimate>
              {/* <IconBrandLinkedin className='h-8 w-8 hover:cursor-pointer hover:text-[#5EC2B5]' /> */}
              <img
                src={linkedin}
                className="h-5 w-5 object-contain hover:cursor-pointer hover:text-[#5EC2B5]"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </BlurFade>
  );
};

export default ProfileCard;
