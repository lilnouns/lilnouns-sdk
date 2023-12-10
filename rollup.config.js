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
    plugins: [
      typescript(),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    onwarn(warning, warn) {
      // Check the warning code and message to suppress specific warnings
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('"use client"')
      ) {
        return
      }

      // For all other warnings, call the default Rollup warn handler
      warn(warning)
    },
  },
  {
    input: 'src/hooks.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      typescript(),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    onwarn(warning, warn) {
      // Check the warning code and message to suppress specific warnings
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('"use client"')
      ) {
        return
      }

      // For all other warnings, call the default Rollup warn handler
      warn(warning)
    },
  },
  {
    input: 'src/configs.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      typescript(),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    onwarn(warning, warn) {
      // Check the warning code and message to suppress specific warnings
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('"use client"')
      ) {
        return
      }

      // For all other warnings, call the default Rollup warn handler
      warn(warning)
    },
  },
]
