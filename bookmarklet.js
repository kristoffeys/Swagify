javascript: (function () {
    //variables with swag
    var s, w, a, g;
    
    //create a style element and change all fonts to Comic Sans!
    s = document.createElement('style');
    s.type = 'text/css';
    w = "*{font-family: 'Comic Sans MS' !important;transition: all 12s;}";
    if (s.styleSheet) s.styleSheet.cssText = w;
    else s.appendChild(document.createTextNode(w));
    document.getElementsByTagName("head")[0].appendChild(s);
    
    //add SWAG favicon (swavicon)
    a = document.createElement('link');
    a.setAttribute('rel', 'icon');
    a.setAttribute('type', 'image/png');
    a.setAttribute('href', 'data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAACo8KAP8ALwAAAP8A6gD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMzABACAkREAAMBEQICQAQAAxEREgJABAADEBASAkAEAAMQEBICQEQzMxAQEgJAADAAEBASIkAAMAAQABICQAAwABAAEgJAADAAEAASAkAAMAAQABICQAQzMxAAEiJERAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAA2gAADopgAA4CYAAOUmAADlJAAABScAAHUHAAB3JwAAdycAAHcnAAB3JgAABwAAAP//AAD//wAA');
    document.getElementsByTagName("head")[0].appendChild(a);
})()
