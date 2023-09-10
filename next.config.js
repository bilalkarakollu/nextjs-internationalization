const { i18n } = require("./next-i18next.config");
const { loadEnvConfig } = require("@next/env");

const projectDir = process.cwd();
loadEnvConfig(projectDir);

/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: false,
};

module.exports = nextConfig;
