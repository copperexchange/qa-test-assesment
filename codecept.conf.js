const {
  TESTS_ROOT_DIR,
} = process.env;

exports.config = {
  tests: TESTS_ROOT_DIR ? `${TESTS_ROOT_DIR}/**/*_test.js` : './tests/**/*_test.js',
  timeout: 100,
  output: './tests-output',
  plugins: {
    pauseOnFail: {},
    allure: {
      enabled: true,
      outputDir: './test-reports',
    },
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  helpers: {
    Puppeteer: {
      url: 'https://www.gmail.com',
      show: true,
      windowSize: '1920x1080',
    },
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder: './tests-output/',
      baseFolder: './tests/visual-regression/screenshots/base/',
      diffFolder: './tests-output/visual-regression/screenshots/diff/',
      prepareBaseImage: false,
    },
  },
  include: {
    I: './steps/actor',
    API: './steps/api',
    loginPage: './pages/loginPage1.js',
  },
  bootstrap: false,
  name: 'copper-QA-tech-test',
};
