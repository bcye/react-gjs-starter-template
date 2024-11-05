const config = {
  applicationName: "example-app",
  friendlyName: "Example App",
  applicationVersion: "1.0.0",
  entrypoint: "./src/App.tsx",
  outDir: "./dist",
  minify: false,
  treeShake: false,
  giVersions: {
    Gtk: "3.0",
    Soup: "2.4",
  }
}

export default () => config;