var date_functions = require('./date_functions_module.js');

function born(){return '';}
function lastday(fpp, fppli, date){_render(fpp, fppli, date);}
function lastweek(fpp, fppli, date){_render(fpp, fppli, date);}
function normal(fpp, fppli, date){_render(fpp, fppli, date);}
function early(fpp, fppli, date){_render(fpp, fppli, date);}
function veryearly(fpp, fppli, date){_render(fpp, fppli, date);}
function sameday(fpp, fppli, date){_render(fpp, fppli, date);}
function future(fpp, fppli, date){}

function fechaprobableparto(d){
    d.setDate(d.getDate() + 280);
    return ("Fecha probable de parto: " + date_functions.normalFormat(d) + ' - ' + date_functions.numFormat(d));
}

function _render(fpp, fppli, d){
    fpp.text(fechaprobableparto(d));
    fppli.show();
}

module.exports = {
    born: born,
    lastday: lastday,
    lastweek: lastweek,
    normal: normal,
    early: early,
    veryearly: veryearly,
    sameday: sameday,
    future: future,
    fechaprobableparto: fechaprobableparto
};
