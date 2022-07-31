import { BuildCircleRounded as BuildCircleRoundedIcon } from "@mui/icons-material";
import { ReactIcon, VueIcon, AngularIcon } from "components/atoms/Icons";

export const sidebars = [
  {
    label: "REACT",
    icon: ReactIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
      },
    ],
  },
  {
    label: "VUE",
    icon: VueIcon,
    childs: [],
  },
  {
    label: "ANGULAR",
    icon: AngularIcon,
    childs: [],
  },
];
