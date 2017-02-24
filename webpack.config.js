module.exports = {
  entry:'./src/main.js',
  output:{
    path:"./dist",
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {test:/\.js$/,loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }}
    ]
  }
}
