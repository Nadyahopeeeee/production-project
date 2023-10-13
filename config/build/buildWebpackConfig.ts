import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server'

import path from 'path';
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev, port} = options;

  console.log('mode', mode, 'isDev', isDev)

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ?  buildDevServer(options) : undefined,
  }
}