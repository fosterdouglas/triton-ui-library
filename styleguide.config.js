const path = require('path')
module.exports = {
  editorConfig: {
    readOnly: 'nocursor'
  },
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
						{src: 'https://cdn.quilljs.com/1.3.6/quill.js'},
					],
				  links: [
						{
							rel: 'stylesheet',
		          href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap'
						},
						{
							rel: 'stylesheet',
		          href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
						},
            {
							rel: 'stylesheet',
		          href: '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'
						},
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

    version: 'v0.9.2',
    pagePerSection: true,
    usageMode: 'expand',
    styleguideDir: 'triton-ui-component-library',
    assetsDir: 'src/assets',
    minimize: false,

  	sections: [

		{name: 'Introduction', sections: [
      {components: 'src/components/Intro/Introduction/*.vue'}
      ],
      sectionDepth: 0
    },

		{name: 'Glossary', sections: [
      {components: 'src/components/Intro/Glossary/*.vue'}
      ],
      sectionDepth: 0
    },

		{name: 'Typography', sections: [
      {components: 'src/components/Intro/Typography/*.vue'}
      ],
      sectionDepth: 0
    },

		{name: 'Design Reference Files', sections: [
      {components: 'src/components/Intro/DesignReference/*.vue'}
      ],
      sectionDepth: 0
    },

    {name: '––––––––', sections: [
      {components: ''}
      ],
      sectionDepth: 0
    },

    {name: 'Elements', sections: [

      {name: 'Icons', sections: [
          {components: 'src/components/Elements/Icons/*.vue'}
        ],
      },

      {name: 'Images', sections: [
        {components: 'src/components/Elements/Images/*.vue'}
        ],
      },

      {name: 'Rows', sections: [
        {components: 'src/components/Elements/Rows/*.vue'}
        ],
      },

      {name: 'Tables', sections: [
        {components: 'src/components/Elements/Tables/*.vue'}
        ],
      },

      {name: 'Timeline', sections: [
        {components: 'src/components/Elements/Timeline/*.vue'}
        ],
      }

    ],
      sectionDepth: 1
    },

    {name: 'Inputs', sections: [

      {name: 'Forms', sections: [
          {components: 'src/components/Inputs/Forms/*.vue'}
        ],
      },

      {name: 'General', sections: [
        {components: 'src/components/Inputs/General/*.vue'}
        ],
      },

      {name: 'Text', sections: [
        {components: 'src/components/Inputs/Text/*.vue'}
        ],
      }

    ],
      sectionDepth: 1
    },

    {name: 'Navigation', sections: [

      {name: 'Buttons', sections: [
          {components: 'src/components/Navigation/Buttons/*.vue'}
        ],
      },

      {name: 'Navs', sections: [
          {components: 'src/components/Navigation/Navs/*.vue'}
        ],
      },

      {name: 'Pagination', sections: [
          {components: 'src/components/Navigation/Pagination/*.vue'}
        ],
      },

      {name: 'Tabs', sections: [
        {components: 'src/components/Navigation/Tabs/*.vue'}
        ],
      },

    ],
      sectionDepth: 1
    },

    {name: 'Overlays', sections: [

      {name: 'Alerts', sections: [
          {components: 'src/components/Overlays/Alerts/*.vue'}
        ],
      },

      {name: 'Lightbox', sections: [
        {components: 'src/components/Overlays/Lightbox/*.vue'}
        ],
      },

      {name: 'Popovers', sections: [
        {components: 'src/components/Overlays/Popovers/*.vue'}
        ],
      },

      {name: 'Toasts', sections: [
          {components: 'src/components/Overlays/Toasts/*.vue'}
        ],
      }
    ],
      sectionDepth: 1
    },

    {name: '–––––––– ', sections: [
      {components: ''}
      ],
      sectionDepth: 0
    },

		{name: 'Examples', sections: [
      {components: 'src/components/Examples/*.vue'}
      ],
      sectionDepth: 0
    }

	]
}
