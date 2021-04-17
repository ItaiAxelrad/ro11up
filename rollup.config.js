import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: path.resolve(__dirname, 'src/assets/scripts/main.js'),
  output: {
    file: path.resolve(__dirname, 'dist/assets/bundle.js'),
    format: 'es',
  },
  plugins: [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    production && terser(), // minify, but only in production
    postcss({
      // process css as needed
      plugins: [autoprefixer],
    }),
  ],
};
