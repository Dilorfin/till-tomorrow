var grunt = require('grunt');
var glob = require('glob');
grunt.loadNpmTasks('grunt-purgecss');

var cssUkSource = glob.sync('./dist/till-tomorrow/uk/styles.*.css').toString();
var cssEnSource = glob.sync('./dist/till-tomorrow/en/styles.*.css').toString();
var cssRuSource = glob.sync('./dist/till-tomorrow/ru/styles.*.css').toString();

var allConfig = {
	options: {
		content: ['./src/app/**/*.ts', './src/app/**/*.html']
	},
	files: {}
};
allConfig.files[cssUkSource] = [cssUkSource];
allConfig.files[cssEnSource] = [cssEnSource];
allConfig.files[cssRuSource] = [cssRuSource];

grunt.initConfig({
	purgecss: {
		all: allConfig,
	}
});
