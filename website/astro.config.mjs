import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import liveCode from "astro-live-code";

export default defineConfig({
  integrations: [
    liveCode(),
    starlight({
      customCss: ["./src/styles/global.css"],
      title: "Gemini UI Docs",
      social: {
        github: "https://github.com/gemini-ui/gemini-ui-monorepo",
        "x.com": "https://twitter.com/GeminiUiDotDev",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
      ],
    }),
  ],
});
