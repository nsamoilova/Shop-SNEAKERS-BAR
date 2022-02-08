

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],


    plugins: [
      [
          "@babel/plugin-proposal-class-properties",
          {
              "loose": true
          }
      ],
      [
          "@babel/plugin-transform-runtime", 
          {
              "asyncGenerators": true,
              "generators": true,
              "async": true
          }
      ],
      ["@babel/plugin-proposal-export-default-from"]
  ]


  };

