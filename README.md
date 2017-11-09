# 2018.cssconf.eu

This repository hosts the sourcecode and the website (in branch [`gh-pages`][gh-pages]) of the CSSconf EU site 2018.

## up and running:

    npm install
    npm start

Should bring up the server on port 8080

## where is...

 - stylesheets: in `contents/css`. `contents/css/main.css` is the file that is pulled through postcss to become `/css/main.css` on the hosted site.

 - javascript: java*what*? nothing there yet. (will go into `contents/js` if needed)

 - assets: `contents/fonts`, `contents/icons`, `contents/images`, ... I guess the pattern is clear.

 - postcss-configuration
   - `config.json`: main configuration (which file, which plugins)
   - `plugins/postcss.js`: the integration-code that actually runs postcss

 - templates are in `templates`
   - `templates/layouts` is for master-templates. They typically define blocks that can be selectively overridden in inheriting templates. Layouts will in general inherit from one another as well.
   - `templates/pages` is for page-specific templates. So if there are special markup-needs for a given site, this is the place it belongs.
   - `templates/partials` is for smaller template-snippets that need to be reused or are just confusing to look at in a bigger file.
   - `templates/_macros.njk` contains all sorts of macro-definitions (called "mixins" in other template-engines, mostly used for often reused chunks of template-logic)
   - `templates/filters`: you can drop js functions here that will then be available (after enabling them in `config.json`) in templates as filters. 
   
     For example `{{ someValue | myCoolFilterFunction }}` will call the exported function from `templates/filters/myCoolFilterFunction.js` with `someValue` as parameter. The value returned from that function is rendered.

 - the content: content (like real content now) is also found in the `contents` directory. For now, we support json and markdown files (with frontmatter) here. The [wintersmith-documentation][] has a good (and short) introduction to that. 

   Even shorter: every (json or markdown) file is rendered as html-file by the same name (so `contents/blub.json` is rendered as `blub.html`). It has to contain a `template`-parameter (either in the json or in the [frontmatter][] of the markdown-file) that points to the template that will render the page.

## about the templates...

We're using the [nunjucks template-engine][]. It's great. It's a clone of the very popular jinja2 engine for python (only slightly different to jekylls liquid templates).

Have a look at the [templating docs][] if you don't know it yet. Also contains hints about editor-support you might want to install.


[gh-pages]: https://github.com/cssconf/2018.cssconf.eu/tree/gh-pages
[nunjucks template-engine]: https://mozilla.github.io/nunjucks/
[templating docs]: https://mozilla.github.io/nunjucks/templating.html
[wintersmith-documentation]: https://github.com/jnordberg/wintersmith#quick-start
[frontmatter]: https://jekyllrb.com/docs/frontmatter/