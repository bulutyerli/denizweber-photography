import { defineType } from "sanity";

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "de", title: "German" },
  { id: "tr", title: "Turkish" },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export const localeTitle = defineType({
  title: "Localized text",
  name: "localeTitle",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
});
