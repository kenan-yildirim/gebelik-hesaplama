var expect = require('chai').expect;

describe('Diferencia entre fecha actual y fecha ingresada', function(){

    var diferencia_entre_fechas = require('../js/modulos/general_info_module.js').diferencia_entre_fechas;

    it('should verify difference is 0 when the given dates are equal', function(){
        var current_date = new Date();
        var input_date = new Date();
        expect(diferencia_entre_fechas(current_date, input_date)).to.equal(-1);
        var current_date = new Date("October 13, 2014 11:13:00");
        var input_date = new Date("October 13, 2014 11:13:00");
        expect(diferencia_entre_fechas(current_date, input_date)).to.equal(-1);
    });

    it('should verify input date is bigger than current date at two given dates', function(){
        var current_date = new Date("September 5, 2016 11:13:00");
        var input_date = new Date("September 25, 2016 11:13:00");
        expect(diferencia_entre_fechas(current_date, input_date)).to.be.below(0);
        var current_date = new Date("September 25, 2016 11:13:00");
        var input_date = new Date("September 5, 2016 11:13:00");
        expect(diferencia_entre_fechas(current_date, input_date)).to.be.above(0);
    });

    it('should verify difference is bigger than 280 at two given dates', function(){
        var current_date = new Date("October 8, 2016 11:13:00");
        var input_date = new Date("January 1, 2016 11:13:00");
        expect(diferencia_entre_fechas(current_date, input_date)).to.equal(280);
        var current_date = new Date("December 8, 2016 11:13:00");
        var input_date = new Date("January 1, 2016 11:13:00");
        expect(diferencia_entre_fechas(current_date, input_date)).to.be.above(280);
    });


});

describe('Determinación de la situación', function(){
    var situation = require('../js/modulos/general_info_module.js').situation;
    it ('should verify born situation at a given difference', function(){
        expect(situation(290)).to.equal("born");
        expect(situation(281)).to.equal("born");
    });
    it ('should verify lastday situation at a given difference', function(){
        expect(situation(280)).to.equal("lastday");
    });
    it ('should verify lastweek situation at a given difference', function(){
        expect(situation(275)).to.equal("lastweek");
        expect(situation(279)).to.equal("lastweek");
    });
    it ('should verify normal situation at a given difference', function(){
        expect(situation(189)).to.equal("normal");
        expect(situation(98)).to.equal("normal");
        expect(situation(22)).to.equal("normal");
    });
    it ('should verify early situation at a given difference', function(){
        expect(situation(21)).to.equal("early");
        expect(situation(18)).to.equal("early");
    });
    it ('should verify veryearly situation at a given difference', function(){
        expect(situation(3)).to.equal("veryearly");
        expect(situation(7)).to.equal("veryearly");
    });
    it ('should verify sameday situation at a given difference', function(){
        expect(situation(0)).to.equal("sameday");
    });
    it ('should verify future situation at a given difference', function(){
        expect(situation(-9)).to.equal("future");
        expect(situation(-3)).to.equal("future");
    });
});
