const { assert } = require('chai');
//const BigNumber = web3.BigNumber;
require('chai')//  .use(require('chai-bignumber')(BigNumber)) // ini di gunakan untuk membandingkan angka decimals besar
    .should();

const WanCash = artifacts.require("Wancash");
const WanCashCrowdsale = artifacts.require("WancashCrowdsale");

contract('WanCashCrowsale', ([, wallet]) => {
    const _nm = "WanCash";
    const _sy = "WCG";
    const _dc = 18;
    beforeEach(
        async function () {
            //Initial Token
            this.name = "Wancash";
            this.symbol = "WCG";
            this.decimals = 18;
            // Deploy TOken
            this.token = await WanCash.new(
                this.name, this.symbol, this.decimals);
            //Crowdsale Config
            this.rate = 250;
            this.wallet = wallet;
            //this.token = token.address;

            this.crowdsale = await WanCashCrowdsale.new(
                this.rate, this.wallet, this.token.address)
        });

    describe('Crowdsale Token ', () => {
        it('Tracks Token', async function () {
            const crowS = await this.crowdsale.token();
            crowS.should.equal(this.token.address); // penggan ti Gunakan Assert
        });
        it('Tract Wallet', async function () {
            const _wallet = await this.crowdsale.wallet();
            _wallet.should.equal(this.wallet); // penggan ti Gunakan Assert
        });
        it('Crowdsale Rate', async function () {
            const _decimals = await this.crowdsale.rate();
            assert.equal(_decimals, this.rate);
        });
    });
});