import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { contents } from "constants/app";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Star as StarIcon } from "@mui/icons-material";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClickItem = useCallback(
    (content: { label: string; link: string }) => () => {
      navigate(content.link);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 400,
          boxSizing: "border-box",
          backgroundColor: "#dcdee1",
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
          {contents.map((content) => (
            <ListItem
              key={content.link}
              onClick={handleClickItem(content)}
              sx={{ cursor: "pointer" }}
            >
              <ListItemIcon>
                <StarIcon sx={{ color: "#86a978" }} />
              </ListItemIcon>
              <ListItemText
                primary={content.label}
                sx={{ textAlign: "right" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
