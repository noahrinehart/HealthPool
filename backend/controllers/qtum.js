const exec = require('exec');

const qtum_cli = "/Users/noahrinehart/Downloads/qtum-0.14.3/bin/qtum-cli -regtest -rpcuser=root -rpcpassword=DREX ";
const qtumd = "/Users/noahrinehart/Downloads/qtum-0.14.3/bin/qtumd -daemon -regtest -server -rpcuser=root -rpcpassword=DREX ";

exports.test = (req, res, next) => {
  exec(qtum_cli + "getinfo", (error, stdout, stderr) => {
    console.log('stdout: ' + stdout);
    // console.log('stderr: ' + stderr);
    // if (error !== null) {
    //   console.log('exec error: ' + error);
    // }
    return next();
  });
}

exports.getUserInfo = (req, res, next) => {

}

exports.postUserInfo = (req, res, next) => {

}
