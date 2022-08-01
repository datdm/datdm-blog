import { Box } from "@mui/material";
import Markdown from "components/atoms/Markdown";
import parseMD from "parse-md";
import { useEffect, useState } from "react";

interface Props {
  src: string;
}

const ReadMarkdown = (props: Props) => {
  const { src } = props;

  const [data, setData] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const readmePath = require(`docx/${src}`);
        console.log(readmePath);
        const res = await fetch(readmePath);
        const text = await res.text();
        const { content } = parseMD(text);
        setData((content as any) || "");
      } catch {
        setData("");
      }
    })();
  }, [src]);

  return (
    <Box width="100%">
      {data ? <Markdown markdown={data} /> : "File not found!!!"}
    </Box>
  );
};

export default ReadMarkdown;
