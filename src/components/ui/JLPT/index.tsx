import { ReactFuri } from "react-furi";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { JpTypeDisplay, JpTypeDisplayOptions } from "constants/n5";
import { useEffect, useState } from "react";
import GrammarDialog from "components/atoms/GrammarDialog";
import ContentReadingDialog from "components/atoms/ContentReadingDialog";

interface Props {
  readingData: any[];
}

const JLPT = (props: Props) => {
  const { readingData } = props;
  const [jpType, setJpType] = useState(JpTypeDisplay.Furigana);
  const [readings, setReadings] = useState([]);
  const [contentReading, setContentReading] = useState({} as any);
  const [isOpenGrammarDialog, setIsOpenGrammarDialog] = useState(false);
  const [isContentReadingDialog, setContentReadingDialog] = useState(false);

  useEffect(() => {
    setReadings([...readingData].sort(() => Math.random() - 0.5) as any);
  }, [readingData]);

  const formatFuri = (furi: any, type: string) => {
    if (jpType === JpTypeDisplay.Vietnamese) {
      return furi.vietnamese;
    }

    if (jpType === JpTypeDisplay.Hiragana) {
      return furi.reading;
    }

    if (jpType === JpTypeDisplay.Kanji) {
      return furi.word;
    }

    return type === "reading" ? furi.reading : furi.word;
  };

  const handleChangeType = (e: SelectChangeEvent) => {
    setJpType(+e.target.value);
  };

  const handleOpenGrammerDialog = () => {
    setIsOpenGrammarDialog(true);
  };

  const handleCloseGrammerDialog = () => {
    setIsOpenGrammarDialog(false);
  };

  const handleOpenContentReadingDialog = (item: any) => () => {
    setContentReading(item);
    setContentReadingDialog(true);
  };

  const handleCloseContentReadingDialog = () => {
    setContentReadingDialog(false);
  };

  return (
    <>
      <Box display="flex">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select value={`${jpType}`} onChange={handleChangeType}>
            {JpTypeDisplayOptions.map((o) => (
              <MenuItem key={o.type} value={o.type}>
                {o.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{ m: 1 }}
          variant="outlined"
          onClick={handleOpenGrammerDialog}
        >
          Ngữ pháp
        </Button>
      </Box>
      <Box>
        {readings.map((item: any, index: number) => (
          <Box
            key={index}
            sx={{ display: "flex", marginBottom: 2, cursor: "pointer" }}
            onClick={handleOpenContentReadingDialog(item)}
          >
            <ReactFuri
              word={`${index + 1}. ${formatFuri(item, "word")}`}
              reading={`${index + 1}. ${formatFuri(item, "reading")}`}
            />
          </Box>
        ))}
      </Box>
      <GrammarDialog
        isOpen={isOpenGrammarDialog}
        onClose={handleCloseGrammerDialog}
      />
      <ContentReadingDialog
        contentReading={contentReading}
        isOpen={isContentReadingDialog}
        onClose={handleCloseContentReadingDialog}
      />
    </>
  );
};

export default JLPT;
