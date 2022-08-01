import { Box } from "@mui/material";
import ReadMarkdown from "components/atoms/ReadMarkdown";
import { useSelector } from "react-redux";
import { Store } from "store";

const HomePage = () => {
  const { srcSelected } = useSelector((state: Store) => state.app);

  return (
    <Box sx={{ display: "flex" }}>
      {srcSelected ? <ReadMarkdown src={srcSelected} /> : "Home Page"}
    </Box>
  );
};

export default HomePage;
