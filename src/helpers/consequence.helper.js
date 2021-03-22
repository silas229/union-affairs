module.exports = function(content, options) {
	return content === false ? '<span class="font-bold text-red-600 dark:text-red-500">Nein</span>' : `<span class="font-bold text-green-600 dark:text-green-500">Ja, am ${content}</span>`

}