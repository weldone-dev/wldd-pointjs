import {defineConfig} from "rollup";
import terser from '@rollup/plugin-terser';

export default defineConfig([
    {
        input: "src/point-js",
        output: [
            {
                file: 'dist/bundle.min.js',
                format: 'umd',
                name: "PointJS",
                indent: false,
                plugins: [
                    terser()
                ]
            },
        ],
    },
])