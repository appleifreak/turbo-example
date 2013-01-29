// Load some major dependencies
var Handlebars = require('handlebars'),
	_ = require('underscore'),
	Turbo = require('turbo');
	
// Layout "cache"
var layouts = {};

// Register a new "page" forward
Turbo.router.register_forward("page", function(req, res) {
	var data = req.route.data,
		route = req.route,
		layout, template_name;

	// Look for a template
	template_name = data.template || null;
	
	// Create a new layout or pull one from the cache
	if (_.has(layouts, template_name)) layout = layouts[template_name];
	else layout = Turbo.theme.new_layout_by_type("page", template_name);

	// Test and save
	if (!layout) req.route.throw_error("Could not find a page template in your theme.", 404);
	layouts[layout.name] = layout;
	
	// Make handlebars like our content
	data.content = new Handlebars.SafeString(data.content);
	
	// Precompile, cache, compile, cache, cache, return, cache
	var compiled = layout.compile(data);
	Turbo.router.cache_route(req.route.pathname, compiled, "text/html", 60 * 3);
	
	res.type("html");
	res.send(compiled);
});