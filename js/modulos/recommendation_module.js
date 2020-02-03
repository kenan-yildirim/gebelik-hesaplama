var cw = require('./weeks_colors_module.js');

function born(recommend, recommendli, w, d){
    recommend.text('Ya pasaron más de 40 semanas. ¡Esperamos que haya salido todo bien con tu bebé y estés muy contenta!');
    recommendli.show();
}

function lastday(recommend, recommendli, w, d){
    recommend.text('Este tal vez es tu último día de embarazo. Recomendamos que estés tranquila y leas la información de la semana 40:  lo mejor está por venir. Si ya vino, ¡Esperamos que haya salido todo bien con tu bebé y estés muy contenta!');
    recommendli.show();
    cw.colourweeks(0, 40);
}

function lastweek(recommend, recommendli, w, d){
    recommend.text('Este es tu úl última semana de embarazo. Recomendamos que estés tranquila y leas la información de la semana 40:  lo mejor está por venir. Si ya vino, ¡Esperamos que haya salido todo bien con tu bebé y estés muy contenta!');
    recommendli.show();
    cw.colourweeks(0, 40);
}

function normal(recommend, recommendli, w, d){ recommendnormal(recommend, recommendli, w, d);}

function early(recommend, recommendli, w, d){
    recommend.text('Todavía es temprano para determinar un embarazo. Igualmente, si pensás que lo estás, ¡podés leer la información acerca de las primeras tres semanas!');
    recommendli.show();
    cw.colourweeks(0, 3);
}

function veryearly(recommend, recommendli, w, d){
    recommend.text('Es imposible determinar un embarazo de forma tan rápida. Tal vez hubo una confusión, podés intentarlo de nuevo seleccionando el último día de tu última menstruación. Igualmente, si planeás quedar embarazada pronto, ¡podés leer la información acerca de las primeras tres semanas!');
    recommendli.show();
    cw.colourweeks(0, 3);
}

function sameday(recommend, recommendli, w, d){
    recommend.text('Es imposible determinar un embarazo de forma tan rápida. Tal vez hubo una confusión, podés intentarlo de nuevo seleccionando el último día de tu última menstruación. Igualmente, si planeás quedar embarazada pronto, ¡podés leer la información acerca de las primeras tres semanas!');
    recommendli.show();
    cw.colourweeks(0, 3);
}

function future(recommend, recommendli, w, d){
    recommend.text('¡La fecha que ingresaste es mayor al día de hoy! Tal vez hubo una confusión, podés intentarlo denuevo seleccionando el último día de tu última menstruación.');
    recommendli.show();
}

function recommendnormal(recommend, recommendli, w, d){
     var week = w + 1;
     if (d == 0){
         recommend.text("¡Esperamos que hayan sido increíbles! Recomendamos que leas la información acerca de la semana " + week + " para que la arranques de la mejor manera.");
         recommendli.show();
         cw.colourweeks(0, week);
     }
     if (d == 1 || d == 2){
         recommend.text("¿Como arrancaste la semana? Esperamos que bien. Recomendamos que leas la información acerca de la semana " + week + " para que sigas de la mejor manera.");
         recommendli.show();
         cw.colourweeks(0, week);
     }
     if (d == 3 || d == 4){
         recommend.text("Esperamos que te esté yendo bien en la semana " + week + " de tu embarazo. Recomendamos que leas la información acerca de la semana " + week + " para que la termines de la mejor manera.");
         recommendli.show();
         cw.colourweeks(0, week);
     }
     if (d == 5 || d == 6){
         recommend.text("Estás en los últimos días de la semana " + week + ". ¡Esperamos que hayan sido increíbles! Recomendamos que leas la información acerca de la semana " + week + " para aclarar dudas si las tenés. Y también, que leas la información acerca de la semana " + (week+1) + " para que arranques de la mejor manera.");
         recommendli.show();
         cw.colourweeks(week, (week+1));
     }
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
