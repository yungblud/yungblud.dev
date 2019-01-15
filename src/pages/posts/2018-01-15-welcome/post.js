export default {
  title: `New Blog!`,
  tags: ["blog", "github"],
  spoiler: "My Blog And My Github",
  getContent: () => import("./document.mdx")
};
