import { IconType } from "react-icons";
export interface Skill {
  title: string;
  description: string;
  Icon: string;
  url: string;
}

export type Utility = {
  title: string;
  data: {
    name: string;
    description: string;
    Icon: IconType;
    link: string;
  }[];
};
