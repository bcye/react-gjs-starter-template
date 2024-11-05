// @ts-ignore
import Gtk from "gi://Gtk?version=3.0";
import { Box, Label, Renderer, Window } from "@reactgjs/renderer";
import * as React from "react";

Gtk.init(null);

function App() {
  return (
    <Window quitOnClose minWidth={200} minHeight={200}>
      <Box>
        <Label>Hello World</Label>
      </Box>
    </Window>
  );
}

const renderer = new Renderer({
  appId: "com.example.app",
});

renderer.start(<App />);
