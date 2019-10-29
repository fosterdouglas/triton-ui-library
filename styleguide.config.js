const path = require('path')
module.exports = {
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/main.js')
  ],
  	template: {
	    	head: {
	      	scripts: [
	        	{src: 'https://kit.fontawesome.com/48a06d5f39.js'},
						{src: 'https://code.jquery.com/jquery-3.4.1.js'},
						{src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'},
						{src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'},
						{src: 'src/js/menuspy.js'},
						{src: 'https://cdn.quilljs.com/1.3.6/quill.js'},

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

    version: 'v0.3',
    pagePerSection: true,
    usageMode: 'expand',
    styleguideDir: 'triton-ui-component-library',
    assetsDir: 'src/assets',
    minimize: false,

  	sections: [
		{name: 'Introduction', sections: [
      {components: 'src/components/Introduction/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: '––––––––', sections: [
      {components: ''}
      ],
      sectionDepth: 0
    },

		{name: 'Buttons', sections: [
      {components: 'src/components/Buttons/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Forms', sections: [
      {components: 'src/components/Forms/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Icons', sections: [
      {components: 'src/components/Icons/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Images', sections: [
      {components: 'src/components/Images/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Input Fields', sections: [
      {components: 'src/components/InputFields/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Pop Overs', sections: [
      {components: 'src/components/PopOvers/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Row Components', sections: [
      {components: 'src/components/RowComponents/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: 'Side Nav', sections: [
      {components: 'src/components/SideNav/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: '––––––––', sections: [
      {components: ''}
      ],
      sectionDepth: 0
    }
	]
}
