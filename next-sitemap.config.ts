/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://next-byster.vercel.app",
  generateRobotsTxt: true, // опционально, можно отключить
  // ...другие опции
};
