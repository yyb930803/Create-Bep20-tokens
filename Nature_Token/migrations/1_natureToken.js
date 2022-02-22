const TestContract = artifacts.require("NatureToken");

module.exports = function (deployer) {
  
  console.log("********************** Running BSC Test Migrations *****************************");

  
  deployer.then(async () => {


    await deployer.deploy(TestContract);

    console.log("Test Contract address: "+ TestContract.address );

 })

};