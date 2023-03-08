//  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
//  this goes in the head ^^^
$(function() {
    //header
    const pathname = String(location.pathname.split("/").splice(-1));
    const headerLinks = {
        "1":{
            "url": "index.html",
            "text": "Home",
            "alt": "Home Page"
        },
        "2":{
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Introduction Page"
        },
        "3":{
            "url": "contract.html",
            "text": "Contract",
            "alt": "Contract Page"
        },
        "4": {
            "url": "tables.html",
            "text": "Tables",
            "alt": "Tables Page"
        },
        "5": {
            "url": "forms.html",
            "text": "Forms",
            "alt": "Forms Page"
        },
        "6": {
            "url": "website_evaluations.html",
            "text": "Web Evaluations",
            "alt": "Website Evaluations Page"
        },
        "7": {
            "url": "stuff/OH YEAH!--whatisthis.htm",
            "text": "CRAP site",
            "alt": "CRAPPY Page"
        }
    };

    const linkSeperatorH = " | ";
    let htmlStringH = "";

    for(let id in headerLinks) {
        htmlStringH += '<a href="' + headerLinks[id]['url'] + '" alt="' + headerLinks[id]['alt'] + '">' + headerLinks[id]['text'] + '</a>';
        if(Number(id) < Object.keys(headerLinks).length) {
            htmlStringH += linkSeperatorH;
        }
    };
    $('#page_header').html(htmlStringH);


    //footer
    const footerLinks = {
        "1": {
            "url": "https://webpages.charlotte.edu/jlucia/",
            "text": "CLT Page",
            "alt": "CLT Page"
        },
        "2": {
            "url": "https://github.com/Messiman28",
            "text": "Github",
            "alt": "Github Page"
        },
        "3": {
            "url": "https://messiman28.github.io/",
            "text": "Github.io",
            "alt": "Github.io Page"
        },
        "4": {
            "url": "https://www.freecodecamp.org/YoshLucci",
            "text": "freecodecamp",
            "alt": "freecodecamp Page"
        },
        "5": {
            "url": "https://www.codecademy.com/profiles/Messiman28",
            "text": "CodeCademy",
            "alt": "codecademy Page"
        },
        "6": {
            "url": "https://www.linkedin.com/in/joshualucia28/",
            "text": "LinkedIn",
            "alt": "linkedin Page"
        }
    };

    const linkSeperatorF = " || ";
    let htmlStringF = "";

    for(let id in footerLinks) {
        htmlStringF += '<a href="' + footerLinks[id]['url'] + '" alt="' + footerLinks[id]['alt'] + '">' + footerLinks[id]['text'] + '</a>';
        if(Number(id) < Object.keys(footerLinks).length) {
            htmlStringF += linkSeperatorF;
        }
    };
    $('#page_footer').html(htmlStringF);
});