import { Box } from "@mui/material";
import parseMD from "parse-md";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const BuildSource = () => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const readmePath = require("docx/build-source.md");
      const a = await fetch(readmePath);
      const text = await a.text();
      const { content } = parseMD(text);
      setData(content as any);
    })();
  }, []);

  return (
    <Box>
      <ReactMarkdown>{data || ""}</ReactMarkdown>
    </Box>
  );
};

export default BuildSource;
