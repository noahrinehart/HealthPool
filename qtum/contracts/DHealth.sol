pragma solidity ^0.4.2;

import './HealthCoin.sol';

contract DHealth{


  //#####ERC20 TOKEN#####

  function sendCoin(address coinContractAddress, address receiver, uint amount){
    HealthCoin h = HealthCoin(coinContractAddress);
    h.transfer(receiver, amount);
  }

  function checkBalance(address coinContractAddress, address account){
    HealthCoin h = HealthCoin(coinContractAddress);
    h.balanceOf(account);
  }

  //#####TRANSFER CLAIM#####
  //#####ONLY CALLABLE BY PROVIDER#####
  function transferClaim(address _patientAddress, address _providerAddress, uint256 _claim){
    assert(providers[_providerAddress] = true);
    _patientAddress.transfer(calculateClaim(patients[_patientAddress], _claim));
  }

  function calculateClaim(address _patient, uint256 _claim) constant returns (uint256){
    return _claim * patients[_patient].payPerMonth * patients[_patient].timePaying * patients[_patient].claimMod;
  }

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

  //#####Patient Information#####
  uint256 totalPatients= 0;
  mapping (address => Patient) public patients;

  struct Patient{
    string name;
    //ipfs hash
    string medicalHistory;
    uint8 status;

    bool isRegistered;

    uint256 payPerMonth;
    uint256 timePaying;
    uint256 claimMod;
    uint256 totalPaid;
  }

  function registerPatient(address _patientAddress, string _patientName, string _medicalHistory){
    patients[_patientAddress] = Patient({name: _patientName, medicalHistory: _medicalHistory, status: 0, isRegistered: true, payPerMonth: 120, timePaying: 0});
    totalPatients ++;
  }

  function getPatientName(address _patientAddress) constant returns(string){
    return patients[_patientAddress].name;
  }

  function getPatientMedicalHistory(address _patientAddress) constant returns(string){
    return patients[_patientAddress].medicalHistory;
  }

  function getPatientStatus(address _patientAddress) constant returns(uint8){
    return patients[_patientAddress].status;
  }

  function setPatientStatus(address _patientAddress, uint8 _status){
    patients[_patientAddress].status = _status;
  }

  function monthlyPay(address _patientAddress){
    assert(msg.value == payPerMonth);
    patients[_patientAddress].totalPaid += payPerMonth;
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

