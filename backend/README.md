## Backend

#### Required Programs:
```bash
nodejs
npm
mongodb
qtum-cli/d # in path
jq # in path
```

#### To Run:
```bash
# Clone repo
git clone https://github.com/noahrinehart/DistHealth17.git
cd DistHealth17/backend
# Install dependencies
npm install --save
# Create .env for environment variables
touch .env
echo "JWT_SECRET=TESTESTESTESTEST" >> .env
# Mongodb database uri
echo "DATABASE_URI=mongodb://localhost/qtum" >> .env
echo "PORT=3000" >> .env
# Better Doctor API Key
echo "BETTER_KEY=<api_key>" >> .env
# In another terminal: mongod
node index.js
```
