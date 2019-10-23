module.exports = {
    // set your styleguidist configuration here
    title: 'Triton UI Library',

    components: 'src/components/**/[A-Z]*.vue',

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

    version: 'alpha 0.1',
    pagePerSection: true,
    usageMode: 'expand',
    styleguideDir: 'build',
    assetsDir: 'src/assets',
    minimize: false
}
