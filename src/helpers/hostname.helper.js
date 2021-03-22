module.exports = function(content) {
	return new URL(content).hostname
}