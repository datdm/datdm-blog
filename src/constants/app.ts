import { BuildCircleRounded as BuildCircleRoundedIcon } from "@mui/icons-material";
import {
  ReactIcon,
  VueIcon,
  AngularIcon,
  ReactRouterDomIcon,
  EslintIcon,
  CssIcon,
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
        label: "React router dom",
        icon: ReactRouterDomIcon,
        src: "reactjs/react-router-dom.md",
      },
      {
        label: "Eslint",
        icon: EslintIcon,
        src: "reactjs/eslint.md",
      },
      {
        label: "CSS",
        icon: CssIcon,
        src: "reactjs/css.md",
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
