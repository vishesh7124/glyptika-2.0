import { cn } from "@/lib/utils";
import { WobbleCard } from "../ui/wobble-card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("grid lg:auto-rows-[18rem]  max-sm:auto-rows-[27rem] grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",className)}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  // icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-2  max-sm:row-span-1 max-sm:!m-4 !m-4 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
        className

      )}
    >
            <WobbleCard
        containerClassName={` ${title?"min-h-[500px]":"max-sm:h-[200px] max-sm:max-w-[90vw]"} col-span-1 lg:col-span-2 h-full  lg:min-h-[300px]`}
        className=""
      >
      <div className={` ${title?"h-[70%] max-sm:h-6/12":"h-full  max-sm:h-full"} `}>
        {header}
    
      </div>
      {title && (
        <div className="group-hover/bento:translate-x-2 p-4 transition duration-200">
          <div className="font-text-tertiary font-bold text-neutral-300 dark:text-neutral-200 !my-2">
            {title}
          </div>
          
          <div className=" text-right font-normal text-neutral-200 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>

      )}

      </WobbleCard>


    </div>
  );
};
