import { ReactFuri } from "react-furi";
import n5 from "assets/data/n5.json";
import { Box } from "@mui/material";

const JLPT = () => {
  return (
    <Box>
      {n5.reading
        .sort(() => Math.random() - 0.5)
        .map((item: any, index: number) => (
          <Box key={index} sx={{ display: "flex", marginBottom: 2 }}>
            <ReactFuri
              word={`${index + 1}. ${item.word}`}
              reading={`${index + 1}. ${item.reading}`}
            />
          </Box>
        ))}
    </Box>
  );
};

export default JLPT;
