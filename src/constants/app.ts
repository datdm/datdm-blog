import { BuildCircleRounded as BuildCircleRoundedIcon } from "@mui/icons-material";
import {
  ReactIcon,
  VueIcon,
  AngularIcon,
  ReactRouterDomIcon,
} from "components/atoms/Icons";

export const sidebars = [
  {
    label: "REACT",
    icon: ReactIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
        src: "reactjs/build-source.md",
      },
      {
        label: "react-router-dom",
        icon: ReactRouterDomIcon,
        src: "reactjs/react-router-dom.md",
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
