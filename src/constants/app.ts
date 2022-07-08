import BuildSource from "pages/BuildSource";
import Routing from "pages/Routing";
import routes from "./routes";

export const contents = [
  {
    label: "Build source",
    link: routes.BuildSource,
    component: BuildSource,
    isShow: true,
  },
  {
    label: "Routing",
    link: routes.Routing,
    component: Routing,
    isShow: true,
  },
];
