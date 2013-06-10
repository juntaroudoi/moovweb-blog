$$(".meta") { # select elements with CSS: scope into any element with class of 'meta'
  $$("> a.icon > img") { # select elements with CSS: scope into any <img> elements that are children of any <a> elements which have the class 'icon' that are children of the current node
    remove() # remove currently scoped node
  } # 'end > a.icon > img' scope
  move_to("..", "bottom") # move entire element with class of 'meta' to the bottom of its parent node
} # end 'class="meta" scope