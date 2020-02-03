function born(state, stateli, d){}
function lastday(state, stateli, d){ _render(state, stateli, d); }
function lastweek(state, stateli, d){ _render(state, stateli, d); }
function normal(state, stateli, d){ _render(state, stateli, d); }
function early(state, stateli, d){ _render(state, stateli, d); }
function veryearly(state, stateli, d){}
function sameday(state, stateli, d){}
function future(state, stateli, d){}

function estado(d){
    var estado = 280 - d;
    return ("Pasaron " + d + " dias. Faltan " + estado + ".");
}

function _render(state, stateli, d){
    state.text(estado(d));
    stateli.show();
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
    estado: estado
};
