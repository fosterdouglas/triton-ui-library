const path = require('path')
module.exports = {
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/styles.scss')
  ],
  	template: {
	    	head: {
	      	scripts: [
	        	{src: 'https://kit.fontawesome.com/48a06d5f39.js'},
						{src: 'https://code.jquery.com/jquery-3.4.1.js'},
						{src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'},
						{src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'},
						{src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'},
						{src: 'src/js/menuspy.js'},
						{src: 'https://cdn.quilljs.com/1.3.6/quill.js'}
					],
				  links: [
						{
							rel: 'preload',
		          href: 'http://sandcastle.co/cdn/ebydesign/triton/sort-solid.svg',
							as: 'image'
						},
						{
							rel: 'stylesheet',
		          href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap'
						},
						{
							rel: 'stylesheet',
		          href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
						}
					]
				}
	},
	theme: {
    fontFamily: {
      base: '"Montserrat", sans-serif'
    }
  },

  	sections: [
		{name: 'Introduction', content: ''},
		{name: '––––––––'},
		{name: 'Buttons', content: 'src/components/Buttons.vue'},
    {name: 'Navigation Menus', components: ''},
		{name: 'Overlays', components: ''},
    {name: 'Typography', components: ''},
		{name: '––––––––'},
		{name: 'Examples', components: ''}
	],



    // set your styleguidist configuration here
    title: 'Triton UI Component Library',

    // sections: [
    //   {
    //     name: 'First Section',
    //     components: 'src/components/**/[A-Z]*.vue'
    //   }
    // ],
    // webpackConfig: {
    //   // custom config goes here
    // }
    defaultExample: true,

    version: 'v0.1',
    pagePerSection: true,
    usageMode: 'expand',
    styleguideDir: 'build',
    assetsDir: 'src/assets',
    minimize: false
}
