exports.routerFunction = function() {
	var strFn = "";

	strFn += "	~~name~~: function (id) {\n";
	strFn += "		if (!this.homeView) {\n";
	strFn += "			this.homeView = new HomeView();\n";
	strFn += "		}\n";
	strFn += "		$('#content').html(this.homeView.el);\n";
	strFn += "		this.headerView.selectMenuItem('home-menu');\n";
	strFn += "	},\n\n";

	return strFn;
}

