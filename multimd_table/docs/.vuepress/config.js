module.exports = {
  base: "/VuePress/",
  markdown: {
	  plugins: {
		 'markdown-it-multimd-table': {
   			  multiline:  true,
              rowspan:    true,
              headerless: true
			}
	    }
    }
}