const TestContract_NatureCredit = artifacts.require("NatureCredit");

module.exports = function (deployer) {
  
  console.log("********************** Running BSC Test Migrations *****************************");

  
  deployer.then(async () => {


    await deployer.deploy(TestContract_NatureCredit);

    console.log("Test Contract address: "+ TestContract_NatureCredit.address );

 })

};