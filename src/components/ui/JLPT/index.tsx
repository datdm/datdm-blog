import { ReactFuri } from "react-furi";
import n5 from "assets/data/n5.json";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { JpTypeDisplay, JpTypeDisplayOptions } from "constants/n5";
import { useEffect, useState } from "react";

const JLPT = () => {
  const [jpType, setJpType] = useState(JpTypeDisplay.Furigana);
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    setReadings(n5.reading.sort(() => Math.random() - 0.5) as any);
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

  return (
    <>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select value={`${jpType}`} onChange={handleChangeType}>
            {JpTypeDisplayOptions.map((o) => (
              <MenuItem key={o.type} value={o.type}>
                {o.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
    </>
  );
};

export default JLPT;
