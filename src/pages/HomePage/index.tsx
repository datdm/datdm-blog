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
import no32 from "assets/data/n4/no32.json"; // done
import no33 from "assets/data/n4/no33.json"; // done
import no34 from "assets/data/n4/no34.json"; // done
import no35 from "assets/data/n4/no35.json"; // done
import no36 from "assets/data/n4/no36.json"; // done
import no37 from "assets/data/n4/no37.json"; // done
import no38 from "assets/data/n4/no38.json"; // done
import no39 from "assets/data/n4/no39.json"; // done
import no40 from "assets/data/n4/no40.json"; // done
import no41 from "assets/data/n4/no41.json"; // done
import no42 from "assets/data/n4/no42.json"; // done
import no43 from "assets/data/n4/no43.json"; // done
import no44 from "assets/data/n4/no44.json"; // done
import no45 from "assets/data/n4/no45.json"; // done
import no46 from "assets/data/n4/no46.json"; // done
import no47 from "assets/data/n4/no47.json"; // done
import no48 from "assets/data/n4/no48.json"; // done
import no49 from "assets/data/n4/no49.json"; // done
import no50 from "assets/data/n4/no50.json"; // done
import no1_1 from "assets/data/n3/no1-1.json"; // done

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
              ...no32.reading,
              ...no33.reading,
              ...no34.reading,
              ...no35.reading,
              ...no36.reading,
              ...no37.reading,
              ...no38.reading,
              ...no39.reading,
              ...no40.reading,
              ...no41.reading,
              ...no42.reading,
              ...no43.reading,
              ...no44.reading,
              ...no45.reading,
              ...no46.reading,
              ...no47.reading,
              ...no48.reading,
              ...no49.reading,
              ...no50.reading,
            ]}
          />
        );
      case sources.JLPT_N3:
        return <JLPT readingData={[...no1_1.reading]} />;
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
