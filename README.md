# DistHealth17

## Architecture Overview
### Backend
* NodeJS server that hosts an api
* Connects to the frontend for authentification, better doctor requests, and qtum requests
* Connects directls to qtum test-chain

### Frontend
* Based on VueJS 1.x (eventually upgrade to 2.x)
* Displayed as a 1-screen app
* Allows authentification with the backend
* Display information fetched from better doctor and qtum through api

## Design API
|Endpoint   |Type   |Description   |
|---|---|---|
|**/api/account**|||
|/api/account|get|Gets account information|
|/api/account|delete|Deletes an account|
|/api/account/profile|post|Updates an acccount's profile info|
|/api/account/password|post|Updates an account's password|
|/api/account/address|post|Adds or updates an account's qtum address|
|**/api/auth**|||
|/api/auth/register|post|Registers an account|
|/api/auth/login|post|Logs in an account|
|**/api/better**|||
|/api/better/practices|get|Gets local practices|
|/api/better/conditions|get|Gets conditions, not treatments|
|/api/better/specialties|get|Gets local specialty practices|
|**/api/qtum**|||
|*/api/qtum/provider*|||
|/api/qtum/provider|post|Creates a provider in the network|
|/api/qtum/provider/name|get|Gets a provider's name|
|/api/qtum/provider/total|get|Gets a provider's total services given|
|/api/qtum/provider/rating|get|Gets a provider's rating|
|*/api/qtum/patient*|||
|/api/qtum/patient|post|Registers a patient in the network|
|/api/qtum/patient/name|get|Gets a patient's name|
|/api/qtum/patient/history|get|Gets a patients ipfs history|
|/api/qtum/patient/status|get|Gets a patient's status (verification)|
|*/api/qtum/claim*|||
|/api/qtum/claim/monthly|post|Pays a monthly payment|
|/api/qtum/claim/transfer|post|Transfers a claim from pool to the patient|
|/api/qtum/claim/calc|get|Calculates the value of a claim|



