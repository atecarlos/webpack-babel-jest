var babelJest = require('babel-jest');

module.exports = {
	process: function(src, filename) {
		return babelJest.process(src, filename)
				.replace(/require\(\s*\'.*\.(css|scss|less)\'\);/gm, '');
	}
};