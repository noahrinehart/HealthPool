#!/usr/bin/env sh
qtumcli="qtum-cli -regtest"

export address=$1
export provider_name=$2

bytecode=$(cat ./bytecode)
jsonabi=$(cat ./jsonabi)
contract_address=$(cat ./contract_address)

eth_address=$($qtumcli gethexaddress $address)
echo $eth_address

encoded_send=$(ethabi encode function jsonabi registerProvider -p $eth_address $provider_name)

$qtumcli callcontract $contract_address $encoded_send
$qtumcli sendtocontract $contract_address $encoded_send

$qtumcli generate 5

$qtumcli listaccounts
