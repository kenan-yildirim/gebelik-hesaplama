function born(pgbar, pgbartext, pgbarli, d){}
function lastday(pgbar, pgbartext, pgbarli, d){_render(pgbar, pgbartext, pgbarli, d);}
function lastweek(pgbar, pgbartext, pgbarli, d){_render(pgbar, pgbartext, pgbarli, d);}
function normal(pgbar, pgbartext, pgbarli, d){_render(pgbar, pgbartext, pgbarli, d);}
function early(pgbar, pgbartext, pgbarli, d){_render(pgbar, pgbartext, pgbarli, d);}
function veryearly(pgbar, pgbartext, pgbarli, d){}
function sameday(pgbar, pgbartext, pgbarli, d){}
function future(pgbar, pgbartext, pgbarli, d){}

function embarazoPorcentaje(n){
    var p = Math.floor(n * (100/280));
    return p;
}

function _render(pgbar, pgbartext, pgbarli, d){
    pgbartext.text(embarazoPorcentaje(d) + "%");
    var v = embarazoPorcentaje(d) + "%";
    pgbar.css('width', v);
    pgbarli.show();
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
    porcentaje: embarazoPorcentaje
};
