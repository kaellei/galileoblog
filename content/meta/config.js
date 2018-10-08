const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://galileofinch.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Galileo Finch",
  authorTwitterAccount: "Galileo_Dudi",
  // info
  infoTitle: "Galileo Finch",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "galileofinchdudi@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/GalileoFinchDudi" },
    { name: "twitter", url: "https://twitter.com/Galileo_Dudi" },
    { name: "facebook", url: "https://www.facebook.com/galileo.finch.71" }
  ]
};
