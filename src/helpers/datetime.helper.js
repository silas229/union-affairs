module.exports = function() {
	return new Date().toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' })
}