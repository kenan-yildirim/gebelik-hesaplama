var expect = require('chai').expect;

describe('Funciones de fecha', function(){

    var df = require('../js/modulos/date_functions_module.js');

    it('should return weeks correctly at a given difference', function(){
        expect(df.weeks(0)).to.equal(1);
        expect(df.weeks(280)).to.equal(40);
        expect(df.weeks(137)).to.equal(19);
        expect(df.weeks(46)).to.equal(6);
    });

    it('should return months correctly at a given difference', function(){
        expect(df.month(0)).to.equal(1);
        expect(df.month(280)).to.equal(9);
        expect(df.month(35)).to.equal(2);
    });

    it('should return trimester correctly at a given difference', function(){
        expect(df.trimester(0)).to.equal(1);
        expect(df.trimester(280)).to.equal(3);
        expect(df.trimester(23)).to.equal(1);
        expect(df.trimester(239)).to.equal(3);
        expect(df.trimester(146)).to.equal(2);
    });

});
