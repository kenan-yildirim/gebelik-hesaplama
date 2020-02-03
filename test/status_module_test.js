var expect = require('chai').expect;

describe('Semanas de embarazo - Estado principal', function(){

    var ws = require('../js/modulos/status_module.js').writeStatus;

    it('should verify difference is 0 when the given dates are equal', function(){
        expect(ws(4,5)).to.equal('Estás embarazada de 4 semanas y 5 días. (Semana 5)');
        expect(ws(19,2)).to.equal('Estás embarazada de 19 semanas y 2 días. (Semana 20)');
    });



});
