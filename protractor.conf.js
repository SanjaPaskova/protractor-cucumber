exports.config = {
    /**
     *  web driver manager address
     **/

    directConnect: true,
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        acceptInsecureCerts : true,
        chromeOptions: {
            // args: ["--headless", "--disable-gpu", "--window-size"]
        }
    },

    // ignoreUncaughtExceptions: "true",

    params: {
        users: {
            user: {
                username: "sanja.paskova",
                password: "#Newuser12#",
                displayName: "User"
            },
        },
        url: "https://beta.protonmail.com/login/"
    },
    suites: {
        folderslabels_tests: 'features/folderslabels/FoldersLabels/*.feature',
    },
    cucumberOpts: {
        tags: ['@Regression or @Smoke'],
        //tags: ['@Some'],
        require: ['support/hooks.ts', 'steps/**/*.ts'],
        format: "json:report/results.json",
        strict: true
      },

    beforeLaunch: function() {
        require('ts-node').register({
          project: './tsconfig.json'
        });
    },
}