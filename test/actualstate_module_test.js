var expect = require('chai').expect;

describe('Estado actual de emebarazo', function(){

    var estado = require('../js/modulos/actualstate_module.js').estado;

    it('should return state correctly at a given difference', function(){
        expect(estado(0)).to.equal("Han pasado 0 dias. Faltan 280 dias");
        expect(estado(280)).to.equal("Han pasado 280 dias. Faltan 0 dias");
        expect(estado(140)).to.equal("Han pasado 140 dias. Faltan 140 dias");
    });

});
