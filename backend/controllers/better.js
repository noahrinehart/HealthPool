const request = require('request'),
      config = require('../config/config');

exports.getPractices = (req, resp, next) => {
  const url = "https://api.betterdoctor.com/2016-03-01/practices?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&fields=uid%2Cname%2Clat%2Clon&skip=0&limit=10&user_key=" + config.betterApiKey;
  var practiceNameList = [];
  request.get(url, null, (err,res,body) => {
    if(err) console.log(err);
    if(res.statusCode === 200 )
      var json = JSON.parse(res.body);
      var practiceList = json.data;
      practiceList.forEach((item) => {
        if (typeof(item.name) !== 'undefined') {
          practiceNameList.push(item);
        }
      });
      return resp.status(200).json({
        success: true,
        practices: practiceNameList
      });
  });
}

exports.getConditions = (req, resp, next) => {
  const url = "https://api.betterdoctor.com/2016-03-01/conditions?fields=name%2Cuid&user_key=" + config.betterApiKey;
  var conditionNameList = [];
  request.get(url, null, (err,res,body) => {
    if(err) console.log(err);
    if(res.statusCode === 200 )
      var json = JSON.parse(res.body);
      var conditionList = json.data;
      conditionList.forEach((item) => {
          conditionNameList.push(item);
      });
      return resp.status(200).json({
        success: true,
        practices: conditionNameList
      });
  });
}

exports.getSpecialties = (req, resp, next) => {
  const url = "https://api.betterdoctor.com/2016-03-01/specialties?fields=uid%2Cname%2Cdescription&user_key=441c72442d9606a7ea281e63f3ba6ff7";
  var specialyNameList = [];
  request.get(url, null, (err,res,body) => {
    if(err) console.log(err);
    if(res.statusCode === 200 )
      var json = JSON.parse(res.body);
      var specialtyList = json.data;
      specialtyList.forEach((item) => {
          specialyNameList.push(item);
      });
      return resp.status(200).json({
        success: true,
        practices: specialyNameList
      });
  });
}
