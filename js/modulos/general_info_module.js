function diferencia_entre_fechas(fecha_actual, fecha_ingresada){
    var diferencia =  fecha_actual.getTime() - fecha_ingresada.getTime();
    diferencia_dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    diferencia_dias--; //Arreglo de la incongruencia de la resta de fechas
    return diferencia_dias;
}

function situation(d){
    if (d > 280) return "born";
    if (d==280) return "lastday";
    if ((273<=d) && (d<=279)) return "lastweek";
    if ((22<=d) && (d<=272)) return "normal";
    if ((8<=d) && (d<=21)) return "early";
    if ((1<=d) && (d<=7)) return "veryearly";
    if (d==0) return "sameday";
    if (d<0) return "future";
}


module.exports = {
  diferencia_entre_fechas: diferencia_entre_fechas,
  situation: situation,
};
