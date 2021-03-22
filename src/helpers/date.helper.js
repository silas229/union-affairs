module.exports = function(content) {
	if (typeof content !== "string") return content
	
	return new Date(content).toLocaleDateString('de-DE', { dateStyle: 'medium' })
}