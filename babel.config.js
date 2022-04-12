
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            'react-native-reanimated/plugin',
            [
                "module-resolver",
                {
                    alias: {
                        src: "./src",
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@config": "./src/config",
                        "@navigation": "./src/navigation",
                        "@redux": "./src/redux",
                        "@constants": "./src/constants",
                        "@screens": "./src/screens",
                        "@dataStore": "./src/dataStore",
                        "@styles": "./src/styles",
                        "@functions": "./src/functions",
                    },
                },
            ],
        ],
    };
};

