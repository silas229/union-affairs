const HandlebarsPlugin = require("handlebars-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
	mode: "production",

	output: {
		path: __dirname,
		filename: "app.bundle.js",
		publicPath: "/"
	},

	devtool: "source-map",

	module: {
		rules: [
			{ 
				test: /\.hbs$/, 
				loader: "handlebars-loader",
				options: {
					helperDirs: path.resolve(__dirname, "src", "helpers-hbs"),
					partialDirs: [
						path.resolve(__dirname, "src", "components"),
					]
				}
			},
			{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new HandlebarsPlugin({
			entry: path.join(__dirname, "src", "*.hbs"),
			// output path and filename(s). This should lie within the webpacks output-folder
			// if ommited, the input filepath stripped of its extension will be used
			output: path.join(__dirname, "[name].html"),
			// you can also add a [path] variable, which will emit the files with their relative path, like
			// output: path.join(process.cwd(), "build", [path], "[name].html"),
			
			// data passed to main hbs template: `main-template(data)`
			// data: require("./app/data/project.json"),
			// or add it as filepath to rebuild data on change using webpack-dev-server
			data: path.join(__dirname, "cases.json"),

			// globbed path to partials, where folder/filename is unique
			partials: [
				path.join(__dirname, "src", "components", "*.hbs")
			],

			// register custom helpers. May be either a function or a glob-pattern
			helpers: {
				projectHelpers: path.join(__dirname, "src", "helpers", "*.helper.js")
			},

			// hooks
			// getTargetFilepath: function (filepath, outputTemplate) {},
			// getPartialId: function (filePath) {}
			onBeforeSetup: function (Handlebars) {},
			onBeforeAddPartials: function (Handlebars, partialsMap) {},
			onBeforeCompile: function (Handlebars, templateContent) {},
			onBeforeRender: function (Handlebars, data, filename) {},
			onBeforeSave: function (Handlebars, resultHtml, filename) {},
			onDone: function (Handlebars, filename) {}
		}),
	],

	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 3000,
		open: true,
		publicPath: "/",
		historyApiFallback: true
	}
}