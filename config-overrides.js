const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  webpack: (config, env) => {
    if (env === "development") {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      config.output.publicPath = process.env.PUBLIC_URL;
    }

    return config;
  },
};
