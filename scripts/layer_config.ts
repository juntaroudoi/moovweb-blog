# Keep track of what layer we're currently running
$layer = env("layers")

# ASSET CONFIGURATION
# These variables are used in functions/main.ts

# these paths are relative to the project's assets/ folder
$asset_images = "images/" + $layer + "/"
$asset_js = "javascript/" + $layer + "/main.js"

# the stylesheet path is just the name of the pre-compiled .scss file
$asset_stylesheet = $layer + "/main"
