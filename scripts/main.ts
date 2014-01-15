# The main file executed by Tritium. The start of all other files.

# layer support
@import layer_config.ts

# if there is no layer specified, the origin website will just pass through
# remove this match if you want to transform your origin website
match_not($layer, "") {
  match(inferred_content_type()) {
    with(/html/) {
      # Protect any XML namespace nodes
      protect_xmlns()

      # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
      # simply remove the "UTF-8" argument.  e.g. html(){ ... }
      html("UTF-8") {
        @import "html.ts"
      }

      # Restore XML namespace nodes
      restore_xmlns()
    }
  }
  else() {
    log("Passing through " + $inferred_content_type + " unmodified.")
  }
}
