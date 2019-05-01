module.exports = {
    pages: {
      'index': {
        entry: './src/pages/Index/main.js',
        template: 'public/index.html',
        title: 'Home Page!',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      'exchange': {
        entry: './src/pages/Exchange/main.js',
        template: 'public/index.html',
        title: 'Exchange Page!',
        chunks: [ 'chunk-vendors', 'chunk-common', 'exchange' ]
      }
    }
  }