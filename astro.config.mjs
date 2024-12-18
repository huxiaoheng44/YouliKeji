import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://youlijiaoyu.com/", // GitHub Pages URL
  base: "", // 子路径（仓库名称）
  output: "static",
  build: {
    format: "file", // 将每个页面构建为独立文件（如 `facilities.html` 而不是目录）
  },
});
