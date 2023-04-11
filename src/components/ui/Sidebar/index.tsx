import { Drawer, List, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { sidebars } from "constants/app";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSrcSelected } from "store/app";
import SubSidebar from "./SubSidebar";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleClickHome = useCallback(() => {
    dispatch(setSrcSelected(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 400,
          boxSizing: "border-box",
          backgroundColor: "#3d4858",
          color: "#fff",
        },
      }}
    >
      <Toolbar
        sx={{
          cursor: "pointer",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
        onClick={handleClickHome}
      >
        datdm Blogs
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
