// Initialize global variables
var globalx = 0;
var globaly = 0;
var currentDate;
var inputDate;
var diffDays;
var day;
var week;

$(document).ready(function() {
  $("#datepicker").datepicker({ //Initialize datepicker
    dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
    monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
    altFormat: "dd-mm-yyyy"
  });
  clearEv();
});

function recoHover(x,y){
    globalx = x;
    globaly = y;
    $('.i'+ x).css("background-color", "#66AFE9");
    $('.i'+ y).css("background-color", "#66AFE9");
}    // Hovers the recommendation
function recoUnHover(x,y){
    $('.i'+ globalx).css("background-color", "#000");
    $('.i'+ globaly).css("background-color", "#000");
    globalx = 0;
    globaly = 0;
}

function execute() {
    clearEv();
    recoUnHover();
    getData();
    if (currentDate <= inputDate)  {
        //getFPP();
        $("#actualweeks").text("NO se pueden calcular las semanas de embarazo... ¡La fecha ingresada no puede ser mayor al día de hoy!");
        fadeInLessFields();
    } else if (diffDays <= 280) {
        getWeeks();
        getStatus();
        recommend();
        getFPP();
        getMonth();
        getTrimester();
        //progressBar();
        fadeInFields();
    } else {
        //getFPP();
        $("#actualweeks").text("Ya pasaron mas de 40 semanas.. ¡Esperamos que hayas tenido a tu bebé y estés muy contenta!");
        fadeInLessFields();
    }
}

function weeks(n){
  n = n/7;
  n = Math.floor(n);
  return n;
}
function days(n){
   n = n % 7;
   return (n);
}


function getData(){ // Get the data I need
    currentDate = new Date();
    inputDate = $("#datepicker").datepicker("getDate");
    $("#cDate").text(normalFormat(currentDate) + '  -  ' + numFormat(currentDate));
    $("#iDate").text(normalFormat(inputDate) + '  -  ' + numFormat(inputDate));
    var timeDiff = Math.abs(inputDate.getTime() - currentDate.getTime());
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    diffDays--; //Arreglo de la incongruencia de la resta de fechas
    day = days(diffDays);
    week = weeks(diffDays);
}

function getWeeks(){
    if (day != 0){ //No son semanas justas
      if (day == -1) day = 6;
      if (week==1) $("#actualweeks").text("Estás embarazada de  " + week  + " semana" + " y " + day + " días. (Semana " + (week+1) + ")");
      else $("#actualweeks").text("Estás embarazada de  " + week  + " semanas" + " y " + day + " días. (Semana " + (week+1) + ")");
    }else{ //Son semanas justas
      $("#actualweeks").text("Estás embarazada de " + week + " semanas. (Ahora entrás en la semana " + (week+1) + ")");
  }
}            //Actual weeks & days
function getMonth(){
    var month;
    month = diffDays/30;
    month = Math.floor(month);
    month++;
    if (month == 10) month = 9;
    $("#actualmonth").text("Mes " + month);
}
function getTrimester(){
    var trimester;
    trimester = diffDays/90;
    trimester = Math.floor(trimester);
    trimester++;
    if (trimester == 4) trimester = 3;
    $("#actualtrimester").text("Trimestre " + trimester);
}
function getStatus(){
    var missing = 280 - diffDays;
    $("#status").text("Han pasado " + diffDays + " dias. Faltan " + missing + " dias");
}           //How much days have passed by and how much days are left
function progressBar(){}         //Show pregnancy progress
function getFPP(){
    inputDate.setDate(inputDate.getDate() + 280);
    $("#dateparto").text("FPP: " + normalFormat(inputDate) + '  -  ' + numFormat(inputDate));
    inputDate.setDate(inputDate.getDate() - 11);
}              //Show fecha probable de parto

function tooEarly(){
    if (currentDate == inputDate){}
    $("#recommendt").text("¡Todavía es muy temprano para determinar un embarazo, pero si creés que así es, felicitaciones! Podés empezar leyendo la semana 3.");
    recoHover(0,3);
}
function lastWeek(){
    if (day==0) $("#actualweeks").text("Estás embarazada de " + week + " semanas");
    else $("#actualweeks").text("Estás embarazada de " + week + " semanas y " + day + " días. (Semana 40)");
    $("#recommendt").text("¡Esta es tu última semana de embarazo. Lo mejor está por llegar. Felicitaciones! Recomendamos que leas la informacíon acerca de la semana 40 para terminar tu embarazo de la mejor forma.");
    recoHover(0,40);
}
function normalRange(){
     var recoweek = week + 1;
     var x = 0;
     if (day == 0){
         $("#recommendt").text("¡Esperamos que hallan sido increíbles! Recomendamos que leas la información acerca de la semana " + recoweek + " para que la arranques de la mejor manera.");
     }
     if (day == 1 || day == 2){
         $("#recommendt").text("¿Como arrancaste la semana? Esperamos que bien. Recomendamos que leas la información acerca de la semana " + recoweek + " para que sigas de la mejor manera.");
     }
     if (day == 3 || day == 4){
         $("#recommendt").text("Esperamos que te esté yendo bien en la semana " + recoweek + " de tu embarazo. Recomendamos que leas la información acerca de la semana " + recoweek + " para que la termines de la mejor manera.");
     }
     if (day == 5 || day == 6){
         $("#recommendt").text("Esperamos que tu semana número " + recoweek + " halla sido increíble. Recomendamos que leas la información acerca de la semana " + recoweek + " para aclarar dudas si las tenés. Y también, que leas la información acerca de la semana " + (recoweek+1) + " para que arranques de la mejor manera.");
         x = recoweek+1;
     }
     console.log("Recommendation : " + recoweek);
     console.log("Recommendation : " + x);
     recoHover(recoweek, x);
}
function recommend(){
  if (diffDays<14) tooEarly();
  if ((14<diffDays) && (diffDays<274)) normalRange();
  if ((274<=diffDays) && (diffDays<=280)) lastWeek();
}

function fadeInFields(){
    $("#cDate").fadeIn(1650);
    $("#iDate").fadeIn(1650);
    $("#dateparto").fadeIn(1650);
    $("#actualweeks").fadeIn(1650);
    $("#status").fadeIn(1650);
    $("#recommendt").fadeIn(1650);
    $("#dateparto").fadeIn(1650);
    $("#actualmonth").fadeIn(1650);
    $("#actualtrimester").fadeIn(1650);
    $(".resulta3").fadeIn(1650);
    $(".panel").fadeIn(1650);
}

function fadeInLessFields(){
    $("#actualweeks").fadeIn(1650);
    $(".panel").fadeIn(1650);
}

function deleteFields(){
    $("#cDate").text("");
    $("#iDate").text("");
    $("#dateparto").text("");
    $("#actualweeks").text("");
    $("#status").text("");
    $("#recommendt").text("");
    $("#dateparto").text("");
    $("#actualmonth").text("");
    $("#actualtrimester").text("");
}
function hideFields(){
    $(".panel").hide();
    $(".resulta3").hide();
    $("#cDate").hide();
    $("#iDate").hide();
    $("#dateparto").hide();
    $("#actualweeks").hide();
    $("#status").hide();
    $("#recommendt").hide();
    $("#dateparto").hide();
    $("#actualmonth").hide();
    $("#actualtrimester").hide();
}
function clearEv(){              //Call three last functions
  deleteFields();
  hideFields();
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
