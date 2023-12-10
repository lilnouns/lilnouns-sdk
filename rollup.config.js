import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/actions.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [typescript(), nodeResolve(), commonjs(), terser()],
  },
  {
    input: 'src/hooks.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [typescript(), nodeResolve(), commonjs(), terser()],
  },
  {
    input: 'src/configs.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [typescript(), nodeResolve(), commonjs(), terser()],
  },
]
