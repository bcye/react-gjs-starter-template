import React, { useState } from "react";
import {
  Align,
  Box,
  Button,
  Label,
  Renderer,
  Window,
} from "@reactgjs/renderer";
import "react-gnome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Window quitOnClose minWidth={800} minHeight={600}>
      <Box horizontalAlign={Align.CENTER} verticalAlign={Align.CENTER}>
        <Label>Count: {count.toString()}</Label>
        <Button onClick={() => setCount((count) => count + 1)}>++</Button>
      </Box>
    </Window>
  );
}

const renderer = new Renderer({
  appId: "com.example.app",
});

renderer.start(<App />);
