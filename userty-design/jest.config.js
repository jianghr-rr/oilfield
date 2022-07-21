const transformIgnorePatterns = [
    '/dist/',
    // Ignore modules without es dir.
    // Update: @babel/runtime should also be transformed
    'node_modules/(?!.*@(babel|ant-design))[^/]+?/(?!(es|node_modules)/)'
];

function getTestRegex(libDir) {
    if (libDir === 'dist') {
        return 'demo\\.test\\.js$';
    }
    return '.*\\.test\\.(j|t)sx?$';
}

module.exports = {
    verbose: true,
    setupFiles: ['./tests/setup.js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
    modulePathIgnorePatterns: ['/_site/'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '\\.tsx?$': './tools/lib/jest/codePreprocessor',
        '\\.js$': './tools/lib/jest/codePreprocessor',
        '\\.md$': './tools/lib/jest/demoPreprocessor',
        '\\.(jpg|png|gif|svg)$': './tools/lib/jest/imagePreprocessor'
    },
    testRegex: getTestRegex(process.env.LIB_DIR),
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        '!components/*/style/index.tsx',
        '!components/style/index.tsx'
    ],
    transformIgnorePatterns,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testURL: 'http://localhost'
};
