var cweeks = {
    "list": '',
    "cw1": 0,
    "cw2": 0,
}

function savelist(l){
    cweeks.list = l;
}

function colourweeks(x, y){
    cweeks.cw1 = x;
    cweeks.cw2 = y;
    var zcw1 = cweeks.list.find('.i'+ cweeks.cw1);
    var zcw2 = cweeks.list.find('.i'+ cweeks.cw2);
    zcw1.css("background-color", "#66AFE9");
    zcw2.css("background-color", "#66AFE9");
}

function whitencolourweeks(){
    var zcw1 = (cweeks.list).find('.i'+ cweeks.cw1);
    var zcw2 = (cweeks.list).find('.i'+ cweeks.cw2);
    zcw1.css("background-color", "#fff");
    zcw2.css("background-color", "#fff");
}

module.exports = {
    savelist: savelist,
    colourweeks: colourweeks,
    whitencolourweeks: whitencolourweeks
};
