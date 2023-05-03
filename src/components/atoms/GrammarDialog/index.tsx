import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import grammar from "assets/data/grammar.json";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GrammarDialog = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth={true}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Grammar</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {Object.values(grammar.grammar).map((item) => {
            return (
              <Box>
                <Box sx={{ fontWeight: "600" }}>Bài {item.no}</Box>
                <Box sx={{ ml: 2 }}>
                  {item.content.map((v, i) => {
                    return (
                      <Box>
                        <Box>{`${i + 1}. ${v.structure}: ${v.mean}`}</Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GrammarDialog;
