$$("header") { # select elements with CSS: scope into header element
  $$("strong.logo.vcard") { # select elements with CSS: In previous scope, scope into strong element with classes of 'logo' and 'vcard' <strong class="logo vcard">...</strong>
    inner("") # empties contents of this node (sets node to empty string "")
    insert("img", src: "https:#s3.amazonaws.com/moovweb-apollo/logo.png") # insert <img> element with src attribute
  } # end <strong class="logo vcard"> scope
  $$("form.form-search") { # select elements with CSS: in previous scope, scope into form element with class 'form-search' <form class="form-search">...</form>
    $$("input") { # select elements with CSS: in previous scope, scope into all input elements
      attribute("placeholder", "Search here...") # change attribute of element - adding attribute placeholder="Search here..."
    } # end <input> scope
  } # end <form class="form-search"> scope
} # end <header> scope