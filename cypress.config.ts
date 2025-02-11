const browserWidth = 1920;
const browserHeight = 1032;

module.exports = {
    video: false,
    e2e: {
        baseUrl: 'http://localhost:3000',
        video: false,
        supportFile: 'cypress/support/component.ts',
        screenshotsFolder: 'cypress/report/screenshots',
        reporter: 'mochawesome',
        reporterOptions: {
            html: false,
            json: true,
            reportDir: 'cypress/report',
            reportFilename: 'report',
            overwrite: true,
        },
        setupNodeEvents(on) {
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.name === 'electron') {
                    launchOptions.preferences.width = browserWidth;
                    launchOptions.preferences.height = browserHeight;
                }

                return launchOptions;
            });
        },
    },
    component: {
        specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
    },
};
