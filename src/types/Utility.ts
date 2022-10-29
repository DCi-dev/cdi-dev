import { IconType } from "react-icons";

export type Utility = {
  title: string;
  data: {
    name: string;
    description: string;
    Icon: IconType;
    link: string;
  }[];
};
