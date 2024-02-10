import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCallback, useState } from "react";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { setSrcSelected } from "store/app";
import { useDispatch } from "react-redux";

interface Props {
  sidebar: any;
  onClick?: () => void;
}

const SubSidebar = (props: Props) => {
  const { sidebar, onClick } = props;

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickItem = useCallback(() => {
    setIsOpen(!isOpen);
    onClick?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleChooseSrc = useCallback(
    (src: string) => () => {
      dispatch(setSrcSelected(src));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <ListItem onClick={handleClickItem} sx={{ cursor: "pointer" }}>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <sidebar.icon sx={{ color: "#fff" }} />
        </ListItemIcon>
        <ListItemText primary={sidebar.label} />
        {isOpen ? (
          <ExpandLessIcon sx={{ color: "#fff" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "#fff" }} />
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
              onClick={handleChooseSrc(child.src)}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {child.icon && <child.icon />}
              </ListItemIcon>
              <ListItemText
                primary={child.label}
                sx={{
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
