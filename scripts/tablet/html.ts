# HTML Transformations go here

$("/html") {

  clean_mobile_meta_tags()

  remove_all_styles()
  remove_html_comments()

  add_assets()

  # @import sections/header.ts
  # @import sections/footer.ts

  # @import mappings.ts

  remove("//body")
  insert("body","Tablet site coming soon..")

  highlight_development()

}
