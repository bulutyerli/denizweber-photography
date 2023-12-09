import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "@/schemas/index";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: "default",
  title: "Photograph Portfolio",

  projectId: "gc6ah75d",
  dataset: "production",
  basePath: "/studio",

  plugins: [
    deskTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "Photograph Portfolio",
          sites: [
            {
              title: "Photograph Portfolio",
              projectId: "gc6ah75d",
              dataset: "production",
              basePath: "/studio",
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
