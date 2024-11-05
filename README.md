# react-gjs-starter

This repository contains a starting base for trying out the [react-gjs](https://github.com/react-gjs/renderer) package.

## Context
* A note: Using React GJS currently requires to use [react-gnome](https://github.com/react-gjs/react-gnome) too, as otherwise gjs will have problems with the bundled code by esbuild.
* If you're new to Developing Gnome Apps with JS in general: Apps are not run through node, but through gjs, which is it's own JavaScript engine, so some JS features might not be available (without polyfills)
* This guide assumes you're using [Bun](https://bun.sh/), you might have to look up equivalent npm commands if you want to use it instead.

## Installation
1. You need the `gtk`, `gtk-devel`, `gjs`, `gjs-devel` and `meson` libraries installed on your system, which are probably available under these names in your package manager.
   2. Ex. for dnf (Fedora): `sudo dnf install gtk gtk-devel gjs gjs-devel meson`
1. Clone the react-gnome repository as it isn't yet on NPM (in a separate folder)
2. Inside the react-gnome folder:
   3. Run `bun install`
   4. Run `bun run build`
   5. Run `bun link` (_this will expose the package to all other JS projects on your system and allow it to be consumed as if it was a normal NPM package_) [More about this](https://bun.sh/docs/cli/link)
1. Inside this folder (react-gjs-starter-template)
   2. Run `bun link @reactgjs/react-gnome`

## Developing
You can run `bun run dev`, it will bundle, build and launch your application and restart it on code changes

## Configuring
You may refer to a more advanced example configuration file for react-gnome [in this repository](https://github.com/ncpa0cpl/untitled-slack-client/blob/master/react-gnome.config.mjs)