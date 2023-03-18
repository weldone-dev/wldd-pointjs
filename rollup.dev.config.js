import {defineConfig} from "rollup";

export default defineConfig([
    {
        input: "src/point-js",
        output: [
            {
                file: 'dist/bundle.min.js',
                format: 'umd',
                name: "PointJS",
                indent: false,
            },
        ],
    },
])