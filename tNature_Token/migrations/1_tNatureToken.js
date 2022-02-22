const Contract_TemporaryNatureToken = artifacts.require("TemporaryNatureToken");

module.exports = function (deployer) {
  
  console.log("********************** Running BSC Test Migrations *****************************");

  
  deployer.then(async () => {


    await deployer.deploy(Contract_TemporaryNatureToken);

    console.log("Test Contract address: "+ Contract_TemporaryNatureToken.address );

 })

};