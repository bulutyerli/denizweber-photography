import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "@/schemas/index";

export default defineConfig({
  name: "default",
  title: "Photograph Portfolio",

  projectId: "gc6ah75d",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
