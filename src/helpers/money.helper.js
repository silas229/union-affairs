module.exports = function(content) {
	switch (content) {
		case null:
			return "Unbekannt"
		case 0:
			return "Keine (direkte) Gegenleistung"
		default:
			return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(content)
	}
}