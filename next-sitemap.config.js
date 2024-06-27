/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.sbzsbz.com",
    changefreq: "daily",
    priority: 0.7,
    sitemapSize: 7000,
    generateRobotsTxt: true,
    exclude: [],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        additionalSitemaps: ["https://www.sbzsbz.com/sitemap-common.xml"],
    },
};
