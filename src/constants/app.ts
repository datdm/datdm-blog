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
  AxiosIcon,
  JestIcon,
  BookIcon,
  FirebaseIcon,
  SequelizeIcon,
  PassportIcon,
} from "components/atoms/Icons";

export const sidebars = [
  {
    label: "REACT",
    icon: ReactIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
        src: "react/build-source.md",
      },
      {
        label: "Docx react",
        icon: BookIcon,
        src: "react/docx.md",
      },
      {
        label: "React router dom",
        icon: ReactRouterDomIcon,
        src: "react/react-router-dom.md",
      },
      {
        label: "Eslint",
        icon: EslintIcon,
        src: "react/eslint.md",
      },
      {
        label: "CSS",
        icon: CssIcon,
        src: "react/css.md",
      },
      {
        label: "Store: redux",
        icon: ReactReduxIcon,
        src: "react/redux.md",
      },
      {
        label: "Store: mobx",
        icon: MobxIcon,
        src: "react/mobx.md",
      },
      {
        label: "Form: formik",
        icon: FormikIcon,
        src: "react/formik.md",
      },
      {
        label: "Form: react-hook-form",
        icon: ReactHookFormIcon,
        src: "react/react-hook-form.md",
      },
      {
        label: "API: axios",
        icon: AxiosIcon,
        src: "react/axios.md",
      },
      {
        label: "UT: jest",
        icon: JestIcon,
        src: "react/jest.md",
      },
      {
        label: "Graphql",
        icon: GraphqlIcon,
        src: "react/graphql.md",
      },
      {
        label: "Firebase",
        icon: FirebaseIcon,
        src: "react/firebase.md",
      },
      {
        label: "Document head",
        icon: ReactHelmetIcon,
        src: "react/react-helmet.md",
      },
      {
        label: "Internationalization ",
        icon: ReactI18nextIcon,
        src: "react/react-i18next.md",
      },
    ],
  },
  {
    label: "VUE",
    icon: VueIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
        src: "vue/build-source.md",
      },
    ],
  },
  {
    label: "ANGULAR",
    icon: AngularIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
        src: "angular/build-source.md",
      },
    ],
  },
  {
    label: "NODEJS",
    icon: NodejsIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
        src: "node/build-source.md",
      },
      {
        label: "Sequelize",
        icon: SequelizeIcon,
        src: "node/sequelize.md",
      },
      {
        label: "Passport JWT",
        icon: PassportIcon,
        src: "node/passport.md",
      },
    ],
  },
];
