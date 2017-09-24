

# HealthPool

## Architecture Overview
### [Backend](https://github.com/noahrinehart/HealthPool/tree/master/backend)
* NodeJS server that hosts an api
* Connects to the frontend for authentification, better doctor requests, and qtum requests
* Connects directls to [qtum](https://qtum.org/) test-chain

### [Frontend](https://github.com/noahrinehart/HealthPool/tree/master/frontend)
* Based on VueJS 1.x (eventually upgrade to 2.x)
* Displayed as a 1-screen app
* Allows authentification with the backend
* Display information fetched from better doctor and qtum through api

## Inspiration
Healthcare is a complex a system with many middlemen. Our goal for this hackathon was to streamline this system into a direct market with patient and provider.

## What it does
A smart contract allows for the creation of an autonomous insurance pool where patients are directly connected to healthcare providers,

A qtum block chain was used to facilitate peer to peer transactions for all interactions in the health insurance pool. Providers may be registered into the system as "In Network" by putting a set amount of funds at stake into the insurance pool. Providers that do not register are marked "Out of Network", and are still available to patients, however they come at a slightly higher cost to them and are not guaranteed prioritized transactions.

Patients may register and are compared to a preset criteria for approval. The approval process asks the patient for basic information such as name, email and medical history. The medical history and any other future records that are uploaded are content addressed using ipfs in order to optimize usage of the EVM on the Qtum chain.

Once the patients are approved monthly payments are automatically transferred from their account to the contract's account until they end their participation.

Shell scripts were created to streamline calling and sending to the smart contract. REST API endpoints were created to add to the ease of use for developers. The vue UI uses the REST endpoints to interact with the smart contract.

When a provider submits a treatment cost request for a patient to the qtum blockcahin the request goes through an algorithm that factors into account what the patient was paying into the pool, the pool size, and other bits of data about the health of the patient. The resulting claim calculation is sent from the pool on the smart contract to the patient in need.

## How we built it
The backend for Health Pooled is the smart contract running on the qtum blockchain. PDF documents and other large files are content addressed using ipfs and can be retrieved using this hash. Vue.js was used for a dynamic front end for the user experience. API endpoints and shell scripts were used for interacting with the smart contract.

## Challenges we ran into
Getting the qtum blockchain setup with a lack of documentation

## Accomplishments that we're proud of
Getting a working smart contract that can be interacted with API endpoints

## What we learned
We learned that healthcare is a complex situation but blockchain is a technology that an disrupt the current industry.

## What's next for Health Pool
Our plan is to offer an ICO (Initial Coin Offering) to raise seed money to meet state regulatory insurance requirements.

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



