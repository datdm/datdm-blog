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
      const readmePath = require(src);
      const res = await fetch(readmePath);
      const text = await res.text();
      const { content } = parseMD(text);
      setData((content as any) || "");
    })();
  }, [src]);

  return (
    <Box>
      <Markdown markdown={data} />
    </Box>
  );
};

export default ReadMarkdown;
