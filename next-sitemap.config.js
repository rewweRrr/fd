/** @type {import('next-sitemap').IConfig} */
import process from 'node:process'

export default {
  siteUrl: process.env.SITE_URL || 'https://fd-test-sigma.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
