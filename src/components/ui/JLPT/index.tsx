import { ReactFuri } from "react-furi";
import n5 from "assets/data/n5.json";
import { Box, IconButton } from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setSrcSelected } from "store/app";

const JLPT = () => {
  const dispatch = useDispatch();

  const handleBack = useCallback(() => {
    dispatch(setSrcSelected(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
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
      {n5.reading
        .sort(() => Math.random() - 0.5)
        .map((item: any, index: number) => (
          <Box key={index} sx={{ display: "flex", marginBottom: 2 }}>
            <Box
              sx={{
                fontSize: 24,
                display: "flex",
                flexDirection: "column",
                lineHeight: "24px",
                justifyContent: "flex-end",
              }}
            >
              {index + 1}.
            </Box>
            <ReactFuri word={item.word} reading={item.reading} />
          </Box>
        ))}
    </Box>
  );
};

export default JLPT;
