const { assert } = require('chai');
//const BigNumber = web3.BigNumber;
require('chai')//  .use(require('chai-bignumber')(BigNumber)) // ini di gunakan untuk membandingkan angka decimals besar
    .should();

const WanCash = artifacts.require("Wancash");

contract('WanCash', accounts => {
    const _nm = "WanCash";
    const _sy = "WCG";
    const _dc = 18;
    beforeEach(
        async function () {
            this.token = await WanCash.new(_nm, _sy, _dc);
        });
    describe('token Ticker --- ', () => {
        it('ini nama Token', async function () {
            const _n = await this.token.name();
            //assert.equal(n, _nm) // ini harus di smakan nama diatas
            _n.should.equal(_nm); // penggan ti Gunakan Assert
        });
        it('ini Symbol Token', async function () {
            const _symbol = await this.token.symbol();
            //console.log(_symbol.should.equal(_sy));
        });
        it('Decimals Token', async function () {
            const _decimals = await this.token.decimals();
            //console.log('decimals >>>', _decimals, _decimals.should.be.BN.equal(_dc), "<<<")
            // _decimals.should.be.bignumber.equal(_dc);
            // expect(await this.token.decimals().to.be.bignumber.equal(_dc));
            assert.equal(_decimals, _dc);
        });
    });
});