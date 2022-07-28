import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCallback, useState } from "react";
import {
  Star as StarIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

interface Props {
  sidebar: any;
  onClick?: () => void;
}

const SubSidebar = (props: Props) => {
  const { sidebar, onClick } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClickItem = useCallback(() => {
    setIsOpen(!isOpen);
    onClick?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <ListItem onClick={handleClickItem} sx={{ cursor: "pointer" }}>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <StarIcon sx={{ color: "#86a978" }} />
        </ListItemIcon>
        <ListItemText
          primary={sidebar.label}
          sx={{ borderBottom: "1px solid #86a978" }}
        />
        {isOpen ? (
          <ExpandLessIcon sx={{ color: "#86a978" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "#86a978" }} />
        )}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {sidebar.childs.map((child: any) => (
            <ListItem
              key={child.label}
              sx={{
                cursor: "pointer",
                pl: 4,
                py: 0.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <child.icon sx={{ color: "#86a978" }} />
              </ListItemIcon>
              <ListItemText
                primary={child.label}
                sx={{
                  borderBottom: "1px solid #86a978",
                  ".MuiTypography-root": { fontSize: "14px" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SubSidebar;
