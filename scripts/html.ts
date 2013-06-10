# HTML Transformations go here

$("/html") {
  rewrite_links() # links are rewritten so pages can be transformed - these will go through Moovweb
  absolutize_srcs() # sources are absolutized so they have absolute paths to the original site - these will NOT go through Moovweb


  # Add the mobile meta tags
  clean_mobile_meta_tags() # look in functions/main.ts for description


  # Needed to begin mobilizing
  remove_all_styles() # remove in-line styles that don't have the data-mw-keep attribute
  remove_html_comments()

  # Late load all the images on the site
  # lateload()


  add_assets() # add content from assets folder

  @import sections/header.ts # import header script - code in this script will be applied to all html pages that pass through Moovweb
  @import sections/footer.ts # import footer script - code in this script will be applied to all html pages that pass through Moovweb

  @import mappings.ts # import mappings script - only execute code that matches the mapping
}

