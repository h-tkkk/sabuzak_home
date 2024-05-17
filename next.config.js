const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        config.resolve.alias["@"] = path.resolve(__dirname, "./");
        config.resolve.alias = {
            ...config.resolve.alias,
            "@assets": path.resolve(__dirname, "./assets/icons"),
        };

        return config;
    },
};

module.exports = nextConfig;
