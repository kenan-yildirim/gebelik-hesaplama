var expect = require('chai').expect;

describe('Funciones de fecha', function(){

    var fp = require('../js/modulos/fpp_module.js');

    it('should return fpp correctly at a given date', function(){
        var idate = new Date("May 8, 2016 11:13:00");
        expect(fp.fechaprobableparto(idate)).to.equal("Fecha probable de parto: Domingo 12 Febrero del 2017 - 12/2/2017");
        var idate = new Date("January 1, 2016 11:13:00");
        expect(fp.fechaprobableparto(idate)).to.equal("Fecha probable de parto: Viernes 7 Octubre del 2016 - 7/10/2016");
    });


});
