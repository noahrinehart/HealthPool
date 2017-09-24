const exec = require('exec');

var hex2a = (hexx) => {
  var hex = hexx.toString();//force conversion
  var str = '';
    for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

exports.postRegisterProvider = (req, res, next) => {
  var address = req.body.address;
  var provider_name = req.body.provider_name;
  exec('../scripts/registerProvider.sh ' + address + ' ' + provider_name, (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    return res.status(201).json({
      success: true
    });
  });
}

exports.getProviderName = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh getProviderName ' + address + " | jq -r '.\"executionResult\".\"output\"'\"", (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var name = hex2a(out);
    return res.status(200).json({
      success: true,
      name: name
    });
  });
}

exports.getProviderTotalServicesGiven = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh getProviderTotalServicesGiven ' + address + " | jq -r '.\"executionResult\".\"output\"'\"", (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var services = hex2a(out);
    return res.status(200).json({
      success: true,
      services: services
    });
  });
}

exports.getProviderQualityRating = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh getProviderQualityRating ' + address + " | jq -r '.\"executionResult\".\"output\"'\"", (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var rating = hex2a(out);
    return res.status(200).json({
      success: true,
      rating: rating
    });
  });
}

exports.postRegisterPatient = (req, res, next) => {
  var address = req.body.address;
  var patient_name = req.body.patient_name;
  var medical_history = req.body.medical_history;
  exec('../scripts/registerPatient.sh ' + address + ' ' + patient_name + ' ' + medical_history, (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    return res.status(201).json({
      success: true
    });
  });
}

exports.getPatientName = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh getPatientName ' + address + " | jq -r '.\"executionResult\".\"output\"'\"", (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var name = hex2a(out);
    return res.status(200).json({
      success: true,
      name: name
    });
  });
}

exports.getPatientMedicalHistory = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh getPatientMedicalHistory ' + address + " | jq -r '.\"executionResult\".\"output\"'\"", (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var ipfs_address = hex2a(out);
    return res.status(200).json({
      success: true,
      ipfs: ipfs_address
    });
  });
}

exports.getPatientStatus = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh getPatientStatus ' + address + " | jq -r '.\"executionResult\".\"output\"'\"", (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var status = hex2a(out);
    return res.status(200).json({
      success: true,
      status: status
    });
  });
}

exports.postMonthlyPay = (req, res, next) => {
  var address = req.body.address;
  exec('../scripts/getValue.sh monthlyPay ' + address, (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    return res.status(200).json({
      success: true
    });
  });
}

exports.postTransferClaim = (req, res, next) => {
  var patient_address = req.body.patient_address;
  var provider_address = req.body.provider_address;
  var claim_amount = req.body.claim_amount;

  exec('../scripts/getValue.sh transferClaim ' + patient_address + ' ' + provider_address + ' ' + claim_amount, (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    return res.status(200).json({
      success: true
    });
  });
}

exports.getCalculateClaim = (req, res, next) => {
  var patient_address = req.body.patient_address;
  var claim_amount = req.body.claim_amount;

  exec('../scripts/getValue.sh calculateClaim ' + patient_address + ' ' + claim_amount, (err, out, code) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }
    var returned = hex2a(out);
    return res.status(200).json({
      success: true,
      returned: returned
    });
  })
}
