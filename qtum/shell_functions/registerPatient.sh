#!/usr/bin/env sh
qtumcli="qtum-cli -regtest"

export address=$1
export patient_name=$2
export medical_history=$3

bytecode=$(cat ./bytecode)
contract_address=$(cat ./contract_address)

medical_history_hash_untrimmed=$(ipfs add $medical_history)
medical_history_hash=$(echo $medical_history_hash_untrimmed | awk '{print $2}')
echo $medical_history_hash

eth_address=$($qtumcli gethexaddress $address)

encoded_send=$(ethabi encode function jsonabi registerPatient -p $eth_address $patient_name $medical_history_hash)

$qtumcli callcontract $contract_address $encoded_send
$qtumcli sendtocontract $contract_address $encoded_send

$qtumcli generate 5

$qtumcli listaccounts
