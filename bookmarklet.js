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

    //change doctype
    document.write('<!DOCTYPE YOLO>\n' + document.head.outerHTML + document.body.outerHTML);

    //add hashtags!
    var walkDOM = function (node, func) {
        func(node);
        node = node.firstChild;
        while(node) {
            walkDOM(node, func);
            node = node.nextSibling;
        }

    };
    walkDOM(document.body, function (node) {

        if (node.nodeName === '#text') {
            var text = node.textContent;
            var tmp = "";
            text = text.replace(/[^A-Za-z]/g, ' ');

            text = text.split(' ');

            if (text.length) {
                for (var i = 0, length = text.length; i < length; i += 1) {
                    var word = text[i];
                    if(word.length > 1){
                        tmp += '#' + word + ' ';
                    }else{
                        tmp += word + ' ';
                    }
                }
            }
            node.nodeValue = tmp;
        }
    });

})()
