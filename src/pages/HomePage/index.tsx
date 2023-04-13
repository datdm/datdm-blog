import { Box } from "@mui/material";
import ReadMarkdown from "components/atoms/ReadMarkdown";
import { sources } from "constants/source";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Store } from "store";
import JLPT from "components/ui/JLPT";

const HomePage = () => {
  const { srcSelected } = useSelector((state: Store) => state.app);

  const renderSrc = useMemo(() => {
    switch (srcSelected) {
      case "":
        return "Home Page";
      case sources.JLPT_N5:
        return <JLPT />;
      default:
        return <ReadMarkdown src={srcSelected} />;
    }
  }, [srcSelected]);

  return <Box sx={{ display: "flex" }}>{renderSrc}</Box>;
};

export default HomePage;
