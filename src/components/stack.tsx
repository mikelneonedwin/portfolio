import { stack } from "@/constants/stack";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";
import { Button } from "./ui/button";

const Stack = () => {
  return (
    <div id="stack" className="py-8">
      <Marquee autoFill pauseOnHover speed={50} direction="left">
        {stack.map((item) => (
          <Button
            key={item.label}
            variant="outline"
            size="lg"
            className="mx-2 flex items-center"
          >
            <Icon icon={item.icon} className="w-5 h-5 mr-2" />
            {item.label}
          </Button>
        ))}
      </Marquee>
    </div>
  );
};

export default Stack;
