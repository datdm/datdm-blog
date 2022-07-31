import { Box } from "@mui/material";
import Sidebar from "components/ui/Sidebar";

interface Props {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, px: 4, py: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default LayoutDefault;
