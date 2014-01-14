# HTML Transformations go here

$("/html") {

  clean_mobile_meta_tags()

  remove_all_styles()
  remove_html_comments()

  match($layer) {
    not("") {
      add_assets()
    }
    # else() {
    #   $asset_images = "images"
    #   $asset_js = "javascript/main.js"
    #   $asset_stylesheet = "main"
    #   add_assets()
    # }
  }

  @optional "@/sections/header.ts"
  @optional "@/sections/footer.ts"

  @import "mappings.ts"

  highlight_development()

}
