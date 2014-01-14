# Keep track of what layer we're currently running
$layer = env("layers")
# problems arise with nested layers :/

# these paths are all relative to the project's assets/ folder
$asset_images = "images/" + $layer + "/"
$asset_js = "javascript/" + $layer + "/main.js"

# the stylesheet path is just the name of the pre-compiled .scss file
# the path to the compiled .css stylesheet will be filled in by the sass() function
$asset_stylesheet = $layer + "/main"
