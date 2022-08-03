import { BuildCircleRounded as BuildCircleRoundedIcon } from "@mui/icons-material";
import {
  ReactIcon,
  VueIcon,
  AngularIcon,
  ReactRouterDomIcon,
  EslintIcon,
  CssIcon,
  ReactHelmetIcon,
  ReactI18nextIcon,
  FormikIcon,
  NodejsIcon,
  ReactHookFormIcon,
  ReactReduxIcon,
  MobxIcon,
  GraphqlIcon,
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
      {
        label: "Store: redux",
        icon: ReactReduxIcon,
        src: "reactjs/redux.md",
      },
      {
        label: "Store: mobx",
        icon: MobxIcon,
        src: "reactjs/mobx.md",
      },
      {
        label: "Form: formik",
        icon: FormikIcon,
        src: "reactjs/formik.md",
      },
      {
        label: "Form: react-hook-form",
        icon: ReactHookFormIcon,
        src: "reactjs/react-hook-form.md",
      },
      {
        label: "Graphql",
        icon: GraphqlIcon,
        src: "reactjs/graphql.md",
      },
      {
        label: "Document head",
        icon: ReactHelmetIcon,
        src: "reactjs/react-helmet.md",
      },
      {
        label: "Internationalization ",
        icon: ReactI18nextIcon,
        src: "reactjs/react-i18next.md",
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
  {
    label: "NODEJS",
    icon: NodejsIcon,
    childs: [],
  },
];
