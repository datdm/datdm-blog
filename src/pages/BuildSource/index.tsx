import { Box } from "@mui/material";
import Markdown from "components/atoms/Markdown";
import parseMD from "parse-md";
import { useEffect, useState } from "react";

const BuildSource = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    (async () => {
      const readmePath = require("docx/reactjs/build-source.md");
      const a = await fetch(readmePath);
      const text = await a.text();
      const { content } = parseMD(text);
      setData((content as any) || "");
    })();
  }, []);

  return (
    <Box>
      <Markdown markdown={data} />
    </Box>
  );
};

export default BuildSource;
