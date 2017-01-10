module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'app/*.js',
      'test/*.js'
    ],
    exclude: [
    ],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: 'DEBUG',
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    plugins: ['karma-phantomjs-launcher', 'karma-mocha', 'karma-chai']
  });
};