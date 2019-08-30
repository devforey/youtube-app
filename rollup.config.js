import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const styles = [
    { src: 'node_modules/youtube-ui-lib/dist/index.css', name: 'youtube.css' }
];

const scripts = [
    { src: 'node_modules/youtube-ui-lib/dist/index.js', name: 'youtube.js' }
];

function copyScripts() {
    return scripts.map(function (script) {
        return {
            src: script.src,
            dest: 'public/js',
            rename: script.name
        }
    });
}

function copyStyles() {
    return styles.map(function (style) {
        return {
            src: style.src,
            dest: 'public/css',
            rename: style.name
        }
    });
}

module.exports = [
    /** Build JS */
    {
        input: 'src/js/index.js',
        output: {
            file: 'public/js/index.js',
            format: 'iife'
        },
        plugins: [
            /** Copy external html and scripts to public/ */
            copy({
                targets: copyScripts()
            })
        ]
    },

    /** Build SASS */
    {
        input: 'src/css/index.scss',
        output: {
            file: 'public/css/index.css',
            format: 'es',
        },
        plugins: [
            postcss({
                extract: true
            }),

            /** Copy external stylsheets to public/ */
            copy({
                targets: copyStyles()
            })
        ]
    }
];