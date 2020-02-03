    var infoembarazo = (function(){

        //init datepicker function
        function initdatepicker(){
              zdpicker.datepicker({ //Initialize datepicker
              dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
              monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
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
        var datefunctions = require('./date_functions_module.js');
        var ginfo = require('./general_info_module.js');
        var status = require('./status_module.js');
        var progressbar = require('./progressbar_module.js');
        var recommendation = require('./recommendation_module.js');
        var fpp = require('./fpp_module.js');
        var actualstate = require('./actualstate_module.js');
        var monthandtrimester = require('./month_and_trimester_module.js');
        var weekcolors = require('./weeks_colors_module.js');

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
