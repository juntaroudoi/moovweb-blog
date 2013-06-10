# The main file executed by Tritium. The start of all other files.
$detected_content_type = $content_type # $content_type is an automatically generated variable
match($x_requested_with, /XMLHttpRequest/) { # $x_requested_with is a header, and if it matches 'XMLHttpRequest', continue
  $detected_content_type = "application/x-ajax" # set new variable $detected_content_type to "application/x-ajax"
}
match($detected_content_type) {
  with(/html/) { # if $detected_content_type is 'html', continue
    replace(/fb:/, "fbn_") # Rewrite the xmlns facebook nodes before the html parser clobbers them

    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") { # open up HTML scope with encoding 'UTF-8'
      @import device_detection.ts # import script to detect user-agent

      @import html.ts # import main HTML script
    }

    replace(/fbn_/, "fb:") # Rewrite the xmlns facebook nodes to restore them
  }
  # with(/javascript/) {
  #   @import ajax.ts
  # }
  else() { # if $detected_content_type has no match, don't transform the content
    log("Passing through " + $detected_content_type + " unmodified.") # log message for debug purposes
  }
}
