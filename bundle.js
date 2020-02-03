/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	    var infoembarazo = (function(){

	        //init datepicker function
	        function initdatepicker(){
	              zdpicker.datepicker({ //Initialize datepicker
	              dayNamesMin: [ "Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt" ],
	              monthNames: [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
	              altFormat: "dd-mm-yyyy"
	            });
	        }

	        //cache DOM variables
	        var ztargetlist = $('.week-list-calculator');
	        var zmw = $('#mainwrapper'); //Dom search (only once)

	        var zdpicker = zmw.find('#datepicker');

	        initdatepicker(); //call previous function

	        var zbutton = zmw.find('button');

	        var zpanel = zmw.find('.panel');

	        var zstatus = zmw.find('.status');
	        var zstatusli = zmw.find('.statusli');

	        var zpgbar = zmw.find('.pgbar');
	        var zpgbartext = zmw.find('.pgbartext');
	        var zpgbarli = zmw.find('.pgbarli');

	        var zrecommendation = zmw.find('.recommendation');
	        var zrecommendationli = zmw.find('.recommendationli');

	        var zfpp = zmw.find('.fpp');
	        var zfppli = zmw.find('.fppli');

	        var zactualstate = zmw.find('.actualstate');
	        var zactualstateli = zmw.find('.actualstateli');

	        var zmonth = zmw.find('.actualmonth');
	        var zmonthli = zmw.find('.actualmonthli');

	        var ztrimester = zmw.find('.actualtrimester');
	        var ztrimesterli = zmw.find('.actualtrimesterli');


	        var info = { //init satus info
	            "difference": 0,
	            "weeks" : 0,
	            "days": 0,
	            "month": 0,
	            "trimester": 0,
	            "situation": "",
	            "color1": "",
	            "color2": ""
	        }

	        //bind events
	        zbutton.on('click', getData);

	        //require modules
	        var datefunctions = __webpack_require__(1);
	        var ginfo = __webpack_require__(2);
	        var status = __webpack_require__(3);
	        var progressbar = __webpack_require__(4);
	        var recommendation = __webpack_require__(5);
	        var fpp = __webpack_require__(7);
	        var actualstate = __webpack_require__(8);
	        var monthandtrimester = __webpack_require__(9);
	        var weekcolors = __webpack_require__(6);

	        weekcolors.savelist(ztargetlist);
	        zpanel.hide();

	        function hidefields(){
	            zstatusli.hide();
	            zpgbarli.hide();
	            zrecommendationli.hide();
	            zfppli.hide();
	            zactualstateli.hide();
	            zmonthli.hide();
	            ztrimesterli.hide();
	            weekcolors.whitencolourweeks();
	        }

	        hidefields(); //clean all fields

	        function getData(){
	            var currentDate = new Date();
	            info.difference = ginfo.diferencia_entre_fechas(currentDate, zdpicker.datepicker("getDate"));
	            info.situation = ginfo.situation(info.difference);
	            info.weeks = datefunctions.weeks(info.difference);
	            info.days = datefunctions.days(info.difference);
	            info.month = datefunctions.month(info.difference);
	            info.trimester = datefunctions.trimester(info.difference);
	            execute();
	        }

	        function execute(){
	            zpanel.show();
	            hidefields();
	            status[info.situation](zstatus, zstatusli, info.weeks, info.days); /*Agregar semana actual en paréntesis*/
	            progressbar[info.situation](zpgbar, zpgbartext, zpgbarli, info.difference);
	            recommendation[info.situation](zrecommendation, zrecommendationli, info.weeks, info.days);
	            fpp[info.situation](zfpp, zfppli, zdpicker.datepicker("getDate"));
	            actualstate[info.situation](zactualstate, zactualstateli, info.difference);
	            monthandtrimester[info.situation](info.month, info.trimester, zmonth, ztrimester, zmonthli, ztrimesterli);
	        }

	        return { //API
	            executeAPI: execute
	        };

	    })();


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	    var d =  (nombreDia(date.getDay()) + ' ' + date.getDate() + ' '  + nombreMes(date.getMonth()) + ' ' + date.getFullYear());
	    return d;
	}

	function nombreDia(n){
	  switch(n) {
	      case 0: return "Pazar"; break;
	      case 1: return "Pazartesi"; break;
	      case 2: return "Salı"; break;
	      case 3: return "Çarşamba"; break;
	      case 4: return "Perşembe"; break;
	      case 5: return "Cuma"; break;
	      case 6: return "Cumartesi"; break;
	  }
	}

	function nombreMes(n){
	  switch(n) {
	      case 0:  return "Ocak"; break;
	      case 1:  return "Şubat"; break;
	      case 2:  return "Mart"; break;
	      case 3:  return "Nisan"; break;
	      case 4:  return "Mayıs"; break;
	      case 5:  return "Haziran"; break;
	      case 6:  return "Temmuz"; break;
	      case 7:  return "Ağustos"; break;
	      case 8:  return "Eylül"; break;
	      case 9:  return "Ekim"; break;
	      case 10: return "Kasım"; break;
	      case 11: return "Aralık"; break;
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


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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
	            return ( w + " haftalık hamilesiniz.");
	        }else{
	            return ( w + " haftalık hamilesiniz." + " (" + (w+1) + ". hafta)");
	        }
	    }
	    else{
	        return( w + " hafta " + d + " günlük hamilesiniz." + " (" + (w+1) + ". hafta)");
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


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var cw = __webpack_require__(6);

	function born(recommend, recommendli, w, d){
	    recommend.text('40 haftayı tamamladınız. Sağlıklı bir doğum ve ömür boyu mutluluklar dileriz.');
	    recommendli.show();
	}

	function lastday(recommend, recommendli, w, d){
	    recommend.text('Doğuma çok yaklaştınız. Lütfen 40. hafta ile ilgili bilgilerinizi tazeleyin ve doğuma hazır olun.');
	    recommendli.show();
	    cw.colourweeks(0, 40);
	}

	function lastweek(recommend, recommendli, w, d){
	    recommend.text('Hamileliğinizin son haftasındasınız. Lütfen doğum öncesi hazrlık bilgilerizi tazeleyin.');
	    recommendli.show();
	    cw.colourweeks(0, 40);
	}

	function normal(recommend, recommendli, w, d){ recommendnormal(recommend, recommendli, w, d);}

	function early(recommend, recommendli, w, d){
	    recommend.text('Gebelik hesabı yapmak için çok erken olabilir. Lütfen girdiğiniz bilgileri kontrol ederek son adet döneminizin son gününü giriniz.');
	    recommendli.show();
	    cw.colourweeks(0, 3);
	}

	function veryearly(recommend, recommendli, w, d){
	    recommend.text('Gebelik hesabı yapmak için çok erken olabilir. Lütfen girdiğiniz bilgileri kontrol ederek son adet döneminizin son gününü giriniz.');
	    recommendli.show();
	    cw.colourweeks(0, 3);
	}

	function sameday(recommend, recommendli, w, d){
	    recommend.text('Gebelik hesabı yapmak için çok erken olabilir. Lütfen girdiğiniz bilgileri kontrol ederek son adet döneminizin son gününü giriniz.');
	    recommendli.show();
	    cw.colourweeks(0, 3);
	}

	function future(recommend, recommendli, w, d){
	    recommend.text('Girdiğiniz tarih bugünden büyük. Lütfen kontrol ederek son adet döneminizin son gününü giriniz.');
	    recommendli.show();
	}

	function recommendnormal(recommend, recommendli, w, d){
	     var week = w + 1;
	     if (d == 0){
	         recommend.text("Gebeliğin " + week + ". haftası ile ilgili bilgileri okuyabilirsiniz.");
	         recommendli.show();
	         cw.colourweeks(0, week);
	     }
	     if (d == 1 || d == 2){
	         recommend.text("Gebeliğin " + week + ". haftası ile ilgili bilgileri okuyabilirsiniz.");
	         recommendli.show();
	         cw.colourweeks(0, week);
	     }
	     if (d == 3 || d == 4){
	         recommend.text("Gebeliğin " + week + ". haftası ile ilgili bilgileri okuyabilirsiniz.");
	         recommendli.show();
	         cw.colourweeks(0, week);
	     }
	     if (d == 5 || d == 6){
	         recommend.text("Gebeliğin " + week + ". haftası ile ilgili bilgileri okuyabilirsiniz.");
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


/***/ },
/* 6 */
/***/ function(module, exports) {

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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var date_functions = __webpack_require__(1);

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
	    return ("Muhtemel doğum tarihi: " + date_functions.normalFormat(d) + ' - ' + date_functions.numFormat(d));
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


/***/ },
/* 8 */
/***/ function(module, exports) {

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
	    return ( d + " gün geçti. " + estado + " gün kaldı.");
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


/***/ },
/* 9 */
/***/ function(module, exports) {

	function born(){return '';}
	function lastday(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
	function lastweek(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
	function normal(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
	function early(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
	function veryearly(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
	function sameday(m, t, month, trimester, monthli, trimesterli){_render(m, t, month, trimester, monthli, trimesterli);}
	function future(m, t, month, trimester, monthli, trimesterli){}

	function _render(m, t, month, trimester, monthli, trimesterli){
	    month.text( m + '. aydasın.' );
	    trimester.text( t + '. trimesterdesin.');
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


/***/ }
/******/ ]);