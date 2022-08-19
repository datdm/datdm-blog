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
  TypescriptIcon,
  NestJsSvgIcon,
  ReactNativeIcon,
  JavascriptIcon,
  IdeaIcon,
  AndroidStudioIcon,
  ReactNavigationIcon,
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
        label: "Typescript",
        icon: TypescriptIcon,
        src: "react/typescript.md",
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
      {
        label: "NestJs",
        icon: NestJsSvgIcon,
        src: "node/nestjs.md",
      },
    ],
  },
  {
    label: "REACT NATIVE",
    icon: ReactNativeIcon,
    childs: [
      {
        label: "Build source",
        icon: BuildCircleRoundedIcon,
        src: "react-native/build-source.md",
      },
      {
        label: "Setup môi trường",
        icon: AndroidStudioIcon,
        src: "react-native/environment.md",
      },
      {
        label: "Routing and Navigation",
        icon: ReactNavigationIcon,
        src: "react-native/react-navigation.md",
      },
    ],
  },
  {
    label: "JAVASCRIPT",
    icon: JavascriptIcon,
    childs: [
      {
        label: "Các function và thuật toán hay ho",
        icon: IdeaIcon,
        src: "javascript/functions-custom.md",
      },
    ],
  },
];
