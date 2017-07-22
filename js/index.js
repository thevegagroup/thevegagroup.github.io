function getHTMLCompany(item) {
    var htmlString = 
        ['<div class="col-sm-2 text-center thumb">',
         '  <div class="companyTWrapper">',
         '    <img src="./img/companies/'+item.img+'" class="companyThumb">',
         '  </div>',
         '</div>'
        ];
    return htmlString.join('\n') + '\n';
}

$.getJSON("./data/companies.json", function (json) {
    var companies = json.companies;
    var output = ''
    var rowoutput = '<div class="row">\n';
    var counter = 0;
    companies.forEach( function (item) {
        rowoutput = rowoutput + getHTMLCompany(item);
        counter++;
        if (counter%6 === 0){
            output = output+ rowoutput + '</div>\n';
            rowoutput = '<div class="row">'            
        }
    });
    output = output+rowoutput + '</div>\n';
    document.getElementById("companies").innerHTML = '\n' + output;
});
