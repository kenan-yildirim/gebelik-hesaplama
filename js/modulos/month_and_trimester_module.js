function born(){return '';}
function lastday(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
function lastweek(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
function normal(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
function early(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
function veryearly(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
function sameday(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
function future(m, t, month, trimester, monthli, trimesterli){}

function _render(m, t, month, trimester, monthli, trimesterli){
    month.text('Estás en el mes: ' + m);
    trimester.text('Estás en el trimestre: ' + t);
    monthli.show();
    trimesterli.show();
}

module.exports = {
    born: born,
    lastday: lastday,
    lastweek: lastweek,
    normal: normal,
    early: early,
    veryearly: veryearly,
    sameday: sameday,
    future: future
};
