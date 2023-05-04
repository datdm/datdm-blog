import { ReactFuri } from "react-furi";
import no1 from "assets/data/n5/no1.json"; // done
import no2 from "assets/data/n5/no2.json"; // done
import no3 from "assets/data/n5/no3.json"; // done
import no4 from "assets/data/n5/no4.json"; // done
import no5 from "assets/data/n5/no5.json";
import no19 from "assets/data/n5/no19.json";
import no20 from "assets/data/n5/no20.json"; // done
import no21 from "assets/data/n5/no21.json";
import no22 from "assets/data/n5/no22.json";
import no23 from "assets/data/n5/no23.json"; // done
import no24 from "assets/data/n5/no24.json";
import no25 from "assets/data/n5/no25.json";
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

const JLPT = () => {
  const [jpType, setJpType] = useState(JpTypeDisplay.Furigana);
  const [readings, setReadings] = useState([]);
  const [isOpenGrammarDialog, setIsOpenGrammarDialog] = useState(false);

  useEffect(() => {
    setReadings(
      [
        ...no1.reading,
        ...no2.reading,
        ...no3.reading,
        ...no4.reading,
        ...no5.reading,
        ...no19.reading,
        ...no20.reading,
        ...no21.reading,
        ...no22.reading,
        ...no23.reading,
        ...no24.reading,
        ...no25.reading,
      ].sort(() => Math.random() - 0.5) as any
    );
  }, []);

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
          <Box key={index} sx={{ display: "flex", marginBottom: 2 }}>
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
    </>
  );
};

export default JLPT;
