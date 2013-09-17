# The main file executed by Tritium. The start of all other files.

match(inferred_content_type()) {
    with(/html/) {
    replace(/fb:/, "fbn_") # Rewrite the xmlns facebook nodes before the html parser clobbers them

    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") {
      @import device_detection.ts

      @import html.ts
    }

    replace(/fbn_/, "fb:") # Rewrite the xmlns facebook nodes to restore them
  }
  # with(/javascript/) {
  #   @import ajax.ts
  # }
  else() {
    log("Passing through " + $detected_content_type + " unmodified.")
  }
}
