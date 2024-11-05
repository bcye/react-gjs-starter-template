import React from 'react';
import { Box, Label, Renderer, Window } from "@reactgjs/renderer";
import "react-gnome"

function App() {
  return (
    <Window quitOnClose minWidth={200} minHeight={200}>
      <Box>
        <Label>Hello, World</Label>
      </Box>
    </Window>
  );
}

const renderer = new Renderer({
  appId: "com.example.app",
});

renderer.start(<App />);
