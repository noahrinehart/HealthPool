#!/usr/bin/env sh
qtumcli="qtum-cli -regtest"

export function_name=$1
export address=$2

#echo $function_name
#echo $address

bytecode=$(cat ./bytecode)
echo $bytecode
jsonabi=$(cat ./jsonabi)
echo $jsonabi
contract_address=$(cat ./contract_address)
echo $contract_address

eth_address=$($qtumcli gethexaddress $address)
echo $eth_address

encoded_call=$(ethabi encode function jsonabi $function_name -p $eth_address)


$qtumcli callcontract $contract_address $encoded_call


#getProviderName(){
#    echo "Getting name of the provider at eth address: $eth_address"
#}

#case "$function_name" in
#    "getProviderName") getProviderName $address

#esac
