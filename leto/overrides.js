exports.routerFunction = function() {
	var strFn = "";

	strFn += "	~~name~~: function (id) {\n";
	strFn += "		if (!this.~~name~~View) {\n";
	strFn += "			this.~~name~~View = new ~~name~~View();\n";
	strFn += "		}\n";
	strFn += "		$('#content').html(this.~~name~~View.el);\n";
	strFn += "		this.headerView.selectMenuItem('home-menu');\n";
	strFn += "	},\n\n";

	return strFn;
}


exports.route = function () {
	var str = "";

	str += "// GET /~~name~~\n"
	str += "exports.~~name~~ = function( req, res ) {\n"
	str += "\n"
	str += "    // We don't want the browser to cache the results \n"
	str += "    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');\n"
	str += "\n"
	str += "    res.json( 200, {} );\n"
	str += "};\n"

	return str;
}