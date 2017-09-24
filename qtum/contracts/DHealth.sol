pragma solidity ^0.4.2;

contract DHealth{

  //#####PROVIDER INFORMATION#####
  uint256 totalProviders = 0;
  mapping (address => Provider) public providers;

  struct Provider{
    string name;
    uint256 totalServicesGiven;
    uint8 qualityRating;

    //Boolean of whether the the provider is registered
    bool isRegistered;
  }

  //#####PROVIDER FUNCTIONS#####
  function registerProvider(address _providerAddress, string _providerName){
    providers[_providerAddress] = Provider({name: _providerName, totalServicesGiven: 0, qualityRating: 5, isRegistered: true});
    totalProviders ++;
  }

  function getProviderName(address _providerAddress) constant returns (string){
    return providers[_providerAddress].name;
  }

  function getProviderTotalServicesGiven(address _providerAddress) constant returns (uint256){
    return providers[_providerAddress].totalServicesGiven;
  }

  function getProviderQualityRating(address _providerAddress) constant returns (uint8){
    return providers[_providerAddress].qualityRating;
  }

  function providerGiveServices(address _providerAddress, uint256 _amount){
    assert(providers[_providerAddress].isRegistered);
    providers[_providerAddress].totalServicesGiven += _amount;
  }

  function getTotalProviders() constant returns (uint256){
    return totalProviders;
  }

  /*
  //#####CUSTOMER INFORMATION#####
  uint256 currentCustomerID = 1;

  struct Customer{
    string name;
    uint256
  }
  */
}

