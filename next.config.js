/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  debug: process.env.NODE_ENV === "development",
  i18n,
  reactStrictMode: true,
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = nextConfig;
