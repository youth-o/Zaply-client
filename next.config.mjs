import withPWAFactory from "next-pwa";

const withPwa = withPWAFactory({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withPwa(nextConfig);
