var babelJest = require('babel-jest');

module.exports = {
	process: function(src, filename) {
		return babelJest.process(src, filename)
				.replace(/require\(\s*\'[a-zA-Z0-9\/\.\_\-\!]*\.(css|scss|less)\'\);/gm, '');
	}
};
