function born(status, statusli, w, d){}
function lastday(status, statusli, w, d){_render(status, statusli, w, d)}
function lastweek(status, statusli, w, d){_render(status, statusli, w, d)}
function normal(status, statusli, w, d){_render(status, statusli, w, d)}
function early(status, statusli, w, d){_render(status, statusli, w, d)}
function veryearly(status, statusli, w, d){}
function sameday(status, statusli, w, d){}
function future(status, statusli, w, d){}

function writeStatus(w, d){
    if (d == 0){
        if (w == 40){
            return ("Estás embarazada de " + w + " semanas.");
        }else{
            return ("Estás embarazada de " + w + " semanas. (Semana " + (w+1) + ")");
        }
    }
    else{
        return("Estás embarazada de " + w + " semanas y " + d + " días. (Semana " + (w+1) + ")");
    }
}

function _render(status, statusli, w, d){
    status.text(writeStatus(w,d));
    statusli.show();
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
    writeStatus: writeStatus
};
