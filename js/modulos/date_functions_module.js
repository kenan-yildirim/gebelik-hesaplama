function days(n){
   n = n % 7;
   return (n);
}

function weeks(n){
  n = n/7;
  n = Math.floor(n);
  if (n == 0) n = 1;
  return n;
}

function month(n){
    month = n/30;
    month = Math.floor(month);
    month++;
    if (month == 10) month = 9;
    return month;
}

function trimester(n){
    var trimester;
    trimester = n/90;
    trimester = Math.floor(trimester);
    trimester++;
    if (trimester == 4) trimester = 3;
    return trimester;
}

function numFormat(date){
  var d = (date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear());
  return d;
}

function normalFormat(date){
    var d =  (nombreDia(date.getDay()) + ' ' + date.getDate() + ' '  + nombreMes(date.getMonth()) + ' del ' + date.getFullYear());
    return d;
}

function nombreDia(n){
  switch(n) {
      case 0: return "Domingo"; break;
      case 1: return "Lunes"; break;
      case 2: return "Martes"; break;
      case 3: return "Miércoles"; break;
      case 4: return "Jueves"; break;
      case 5: return "Viernes"; break;
      case 6: return "Sábado"; break;
  }
}

function nombreMes(n){
  switch(n) {
      case 0:  return "Enero"; break;
      case 1:  return "Febrero"; break;
      case 2:  return "Marzo"; break;
      case 3:  return "Abril"; break;
      case 4:  return "Mayo"; break;
      case 5:  return "Junio"; break;
      case 6:  return "Julio"; break;
      case 7:  return "Agosto"; break;
      case 8:  return "Septiembre"; break;
      case 9:  return "Octubre"; break;
      case 10: return "Noviembre"; break;
      case 11: return "Diciembre"; break;
  }
}

module.exports = {
    days: days,
    weeks: weeks,
    month: month,
    trimester: trimester,
    numFormat: numFormat,
    normalFormat: normalFormat
};
