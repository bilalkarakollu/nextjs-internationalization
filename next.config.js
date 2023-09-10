const { i18n } = require("./next-i18next.config");
const path = require("path");

/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  localePath: path.resolve("./public/locales"),
  localeStructure: "{{lng}}/{{ns}}",
};

module.exports = nextConfig;
