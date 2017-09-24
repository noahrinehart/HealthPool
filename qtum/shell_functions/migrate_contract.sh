#!/usr/bin/env bash
qtumcli="qtum-cli -regtest"

bytecode_untrimmed=$(solc --optimize --bin ../contracts/DHealth.sol)
bytecode=${bytecode_untrimmed:58}
echo $bytecode > ./bytecode

jsonabi_untrimmed=$(solc --optimize --abi ../contracts/DHealth.sol)
jsonabi=${jsonabi_untrimmed:58}
echo $jsonabi > ./jsonabi

create_contract_output=$($qtumcli createcontract $bytecode 1000000)
contract_address=$(echo $create_contract_output | jq '.address' | tr -d '"')
echo $contract_address > ./contract_address

printf "The contract address is $contract_address \n\n"

echo "Mining some blocks..."
$qtumcli generate 5

printf "\n"

$qtumcli getaccountinfo $contract_address

#Make sure that the qtum addresses exist
qtum_patient_0=$($qtumcli getaccountaddress "patient_0")
qtum_patient_1=$($qtumcli getaccountaddress "patient_1")
qtum_patient_2=$($qtumcli getaccountaddress "patient_2")
qtum_patient_3=$($qtumcli getaccountaddress "patient_3")
qtum_patient_4=$($qtumcli getaccountaddress "patient_4")
qtum_patient_5=$($qtumcli getaccountaddress "patient_5")
qtum_patient_6=$($qtumcli getaccountaddress "patient_6")
qtum_patient_7=$($qtumcli getaccountaddress "patient_7")
qtum_patient_8=$($qtumcli getaccountaddress "patient_8")
qtum_patient_9=$($qtumcli getaccountaddress "patient_9")

qtum_provider_0=$($qtumcli getaccountaddress "provider_0")
qtum_provider_1=$($qtumcli getaccountaddress "provider_1")
qtum_provider_2=$($qtumcli getaccountaddress "provider_2")
qtum_provider_3=$($qtumcli getaccountaddress "provider_3")
qtum_provider_4=$($qtumcli getaccountaddress "provider_4")

#Convert qtum addresses to the ethereum hexadecimal addresses
#eth_patient_0=$($qtumcli gethexaddress $qtum_patient_0)
#eth_patient_1=$($qtumcli gethexaddress $qtum_patient_1)
#eth_patient_2=$($qtumcli gethexaddress $qtum_patient_2)
#eth_patient_3=$($qtumcli gethexaddress $qtum_patient_3)
#eth_patient_4=$($qtumcli gethexaddress $qtum_patient_4)
#eth_patient_5=$($qtumcli gethexaddress $qtum_patient_5)
#eth_patient_6=$($qtumcli gethexaddress $qtum_patient_6)
#eth_patient_7=$($qtumcli gethexaddress $qtum_patient_7)
#eth_patient_8=$($qtumcli gethexaddress $qtum_patient_8)
#eth_patient_9=$($qtumcli gethexaddress $qtum_patient_9)

#eth_provider_0=$($qtumcli gethexaddress $qtum_provider_0)
#eth_provider_1=$($qtumcli gethexaddress $qtum_provider_1)
#eth_provider_2=$($qtumcli gethexaddress $qtum_provider_2)
#eth_provider_3=$($qtumcli gethexaddress $qtum_provider_3)
#eth_provider_4=$($qtumcli gethexaddress $qtum_provider_4)









