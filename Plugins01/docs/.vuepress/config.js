module.exports = {
  base: "/VuePress/",
  plugins: [
    '@vuepress/back-to-top',
	['reading-progress', {readingDir: /[^/]+$/}]
  ]
}