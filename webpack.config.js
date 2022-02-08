const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const regeneratorRuntime = require("regenerator-runtime");





module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
   
   
    
  },

  
 
 
   
  mode: "development",
  plugins: [new MiniCssExtractPlugin()],
  module: {
       rules: [
           {
               test:/\.js$|jsx/,
               use: ["babel-loader"],
               
           },

           {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
           },

           {
            test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
            type: 'asset/resource',
          },

          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }

       ]

    },

    devServer: {
           static: {
             directory: path.resolve(__dirname,'public') ,
             
             
           },
           

            open: true,
            liveReload: true,
            port:8080,
            historyApiFallback:true,
            
          
         },

         resolve: {
           extensions: ['.js', '.jsx'],
           alias: {
             components: path.resolve(__dirname, 'src/components'),
             images: path.resolve(__dirname, 'src/images'),
             pages: path.resolve(__dirname, 'src/pages'),
             
             
           }
         }

          
         
 


}

