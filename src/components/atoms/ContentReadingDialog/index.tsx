import { ReactFuri } from "react-furi";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

interface Props {
  contentReading: any;
  isOpen: boolean;
  onClose: () => void;
}

const ContentReadingDialog = (props: Props) => {
  const { contentReading, isOpen, onClose } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth={true}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText sx={{ color: "#000" }}>
          <ReactFuri
            word={contentReading.word}
            reading={contentReading.reading}
          />
          <Box sx={{ mt: 1 }}>{contentReading.vietnamese}</Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContentReadingDialog;
