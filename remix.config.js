/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    /^react-multi-email/,
    /^supercluster/,
    /^kdbush/,
  ],
  tailwind: true,
  serverModuleFormat: 'cjs',
}
