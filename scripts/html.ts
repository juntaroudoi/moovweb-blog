# HTML Transformations go here

$("/html") {

  clean_mobile_meta_tags()

  remove_all_styles()
  remove_html_comments()

  add_assets()

  @optional "@/sections/header.ts"
  @optional "@/sections/footer.ts"

  @import "mappings.ts"

  highlight_development()

}
