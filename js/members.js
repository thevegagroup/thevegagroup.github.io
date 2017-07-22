function getHTMLContact(title, name, major, extlink, img) {
    var htmlString = 
        ['<div class="col-sm-4 text-center">',
        '  <h4>' + title + '</h4>',
        '  <a href="'+extlink+'" target="_blank"><img src="'
            +img+'" class="img-respsonsive img-circle"></a>',
        '   <p>'+ name + '</p>',
        ' <p>' + major + '</p>',
        '</div>']
    return htmlString.join('\n');
}

$.getJSON("../data/contacts.json", function (json) {
    var eboard = json.eboard;
    for (var key in eboard) {
        if (eboard.hasOwnProperty(key)) {
            document.getElementById(key).innerHTML = 
                getHTMLContact(eboard[key].title, 
                    eboard[key].name, 
                    eboard[key].major,
                    eboard[key].extLink,
                    eboard[key].imgName);
        }
    }
});