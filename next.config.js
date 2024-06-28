const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                source: "/(.*)", // 모든 경로에 대해 헤더 적용
                headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
            },
        ];
    },
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
