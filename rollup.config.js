// asafarim-webapp\packages\project-card\rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      modules: true,
      extract: false,
      inject: true,
      minimize: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    terser()
  ],
  external: ['react', 'react-dom']
};