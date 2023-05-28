import { Box, IconButton } from "@mui/material";
import ReadMarkdown from "components/atoms/ReadMarkdown";
import { sources } from "constants/source";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "store";
import JLPT from "components/ui/JLPT";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { setSrcSelected } from "store/app";
import no1 from "assets/data/n5/no1.json"; // done
import no2 from "assets/data/n5/no2.json"; // done
import no3 from "assets/data/n5/no3.json"; // done
import no4 from "assets/data/n5/no4.json"; // done
import no5 from "assets/data/n5/no5.json"; // done
import no6 from "assets/data/n5/no6.json"; // done
import no7 from "assets/data/n5/no7.json"; // done
import no8 from "assets/data/n5/no8.json";
import no9 from "assets/data/n5/no9.json";
import no10 from "assets/data/n5/no10.json";
import no11 from "assets/data/n5/no11.json";
import no12 from "assets/data/n5/no12.json";
import no13 from "assets/data/n5/no13.json"; // done
import no14 from "assets/data/n5/no14.json"; // done
import no15 from "assets/data/n5/no15.json";
import no16 from "assets/data/n5/no16.json";
import no17 from "assets/data/n5/no17.json";
import no18 from "assets/data/n5/no18.json";
import no19 from "assets/data/n5/no19.json";
import no20 from "assets/data/n5/no20.json"; // done
import no21 from "assets/data/n5/no21.json";
import no22 from "assets/data/n5/no22.json";
import no23 from "assets/data/n5/no23.json"; // done
import no24 from "assets/data/n5/no24.json";
import no25 from "assets/data/n5/no25.json";
import no26 from "assets/data/n4/no26.json"; // done
import no27 from "assets/data/n4/no27.json"; // done
import no28 from "assets/data/n4/no28.json"; // done
import no29 from "assets/data/n4/no29.json"; // done
import no30 from "assets/data/n4/no30.json"; // done
import no31 from "assets/data/n4/no31.json"; // done

const HomePage = () => {
  const { srcSelected } = useSelector((state: Store) => state.app);
  const dispatch = useDispatch();

  const renderSrc = useMemo(() => {
    switch (srcSelected) {
      case "":
        return "Home Page";
      case sources.JLPT_N5:
        return (
          <JLPT
            readingData={[
              ...no1.reading,
              ...no2.reading,
              ...no3.reading,
              ...no4.reading,
              ...no5.reading,
              ...no6.reading,
              ...no7.reading,
              ...no8.reading,
              ...no9.reading,
              ...no10.reading,
              ...no11.reading,
              ...no12.reading,
              ...no13.reading,
              ...no14.reading,
              ...no15.reading,
              ...no16.reading,
              ...no17.reading,
              ...no18.reading,
              ...no19.reading,
              ...no20.reading,
              ...no21.reading,
              ...no22.reading,
              ...no23.reading,
              ...no24.reading,
              ...no25.reading,
            ]}
          />
        );
      case sources.JLPT_N4:
        return (
          <JLPT
            readingData={[
              ...no26.reading,
              ...no27.reading,
              ...no28.reading,
              ...no29.reading,
              ...no30.reading,
              ...no31.reading,
            ]}
          />
        );
      default:
        return <ReadMarkdown src={srcSelected} />;
    }
  }, [srcSelected]);

  const handleBack = useCallback(() => {
    dispatch(setSrcSelected(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "block" }}>
      {srcSelected !== "" && (
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleBack}
        >
          <KeyboardBackspaceIcon />{" "}
          <Box
            sx={{
              fontSize: 24,
            }}
          >
            Back
          </Box>
        </IconButton>
      )}
      {renderSrc}
    </Box>
  );
};

export default HomePage;
