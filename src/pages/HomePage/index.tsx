import { Box, IconButton } from "@mui/material";
import ReadMarkdown from "components/atoms/ReadMarkdown";
import { sources } from "constants/source";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "store";
import JLPT from "components/ui/JLPT";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { setSrcSelected } from "store/app";

const HomePage = () => {
  const { srcSelected } = useSelector((state: Store) => state.app);
  const dispatch = useDispatch();

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

  const handleBack = useCallback(() => {
    dispatch(setSrcSelected(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "block" }}>
      {srcSelected !== "" && (
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleBack}
        >
          <KeyboardBackspaceIcon />{" "}
          <Box
            sx={{
              fontSize: 24,
            }}
          >
            Back
          </Box>
        </IconButton>
      )}
      {renderSrc}
    </Box>
  );
};

export default HomePage;
