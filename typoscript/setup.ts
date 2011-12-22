config {
    renderCharset = utf-8
    doctype = html5
    xmlprologue = none
}

page = PAGE
page.typeNum = 0
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page
page.10.disableExplosivePreview = 1

page.headerData {
    10 = TEXT
    10.value = <meta name="viewport" content="width=device-width, initial-scale=1">
}

page.includeJSlibs {
    jquery = http://code.jquery.com/jquery-1.6.4.min.js
    jquery.external = 1
    jquery.disableCompression = 1
    jquery.excludeFromConcatenation = 1

    jquerymobile = http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js
    jquerymobile.external = 1
    jquerymobile.disableCompression = 1
    jquerymobile.excludeFromConcatenation = 1
}

page.includeCSS {
    jquerymobile = http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css
    jquerymobile.external = 1
    jquerymobile.disableCompression = 1
    jquerymobile.excludeFromConcatenation = 1
}

lib.field_header = COA
lib.field_header {
    10 = TEXT
    wrap = <div data-role="header" data-position="fixed">|</div>
    10 {
        data = page:title
        wrap = <h1>|</h1>
    }
    20 = TEXT
    20 {
        value = Home
        typolink.parameter = {$website.links.homepage}
        typolink.ATagParams = data-icon="home" data-iconpos="notext" data-direction="reverse" class="ui-btn-right jqm-home"
    }
}

# Remove the home icon on homepage
[globalVar = TSFE:id = {$website.links.homepage}]
lib.field_header.20.value >
lib.field_header.20.typolink >
[global]

lib.field_footer = TEXT
lib.field_footer {
    wrap = <div data-role="footer">|</div>
    value = <p>&copy; 2011 MJOR</p>
}


# Remove useless classes (h1 class="csc-firstHeader" and so on)
lib.stdheader.3.headerClass >

lib.stdheader.stdWrap.dataWrap >
tt_content.stdWrap.innerWrap.cObject.default >

# Remove class="bodytext" to paragraphs
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >

# Change header levels: h1 -> h2, h2 -> h3, h3 -> h4
lib.stdheader.10.1 < lib.stdheader.10.2
lib.stdheader.10.2 < lib.stdheader.10.3
lib.stdheader.10.3 < lib.stdheader.10.4

temp.listHeader = COA
temp.listHeader.1 = TEXT
temp.listHeader.1 {
  field = header
  if {
    equals.field = header_layout
    value = 100
    negate = 1
  }
  wrap = <li data-role="list-divider" role="heading">|</li>
}
temp.listHeader.wrap = <ul data-role="listview" data-inset="true">|

# Sitemap tuning
tt_content.menu.10 >
tt_content.menu.10 < temp.listHeader
tt_content.menu.20.1.wrap = |</ul>