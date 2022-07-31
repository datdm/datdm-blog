import { Drawer, List, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { sidebars } from "constants/app";
import SubSidebar from "./SubSidebar";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 400,
          boxSizing: "border-box",
          backgroundColor: "#4e5b6e",
          color: "#fff",
        },
      }}
    >
      <Toolbar
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
      >
        Technical ReactJS
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List dense sx={{ margin: "0 20px" }}>
          {sidebars.map((sidebar) => (
            <SubSidebar sidebar={sidebar} key={sidebar.label} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
