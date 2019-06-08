'use strict';

let unit;
let result;

function hddUnits(args) {
  if(args !== 0 && args < 1024) {
    unit = 'B';
  }
  if(args >= 1024 && args < Math.pow(1024, 2)) {
    unit = 'KB/s';
  }
  if(args >= Math.pow(1024, 2) && args < Math.pow(1024, 3)) {
    unit = 'MB/s';
  }
  if(args >= Math.pow(1024, 3) && args < Math.pow(1024, 4)) {
    unit = 'GB/s';
  }
  if(args >= Math.pow(1024, 4) && args < Math.pow(1024, 5)) {
    unit = 'TB/s';
  }
  return unit;
}

function hddSpeed(args) {
  if(args !== 0 && args < 1024) {
    result = 0;
  }
  if(args >= 1024 && args < Math.pow(1024, 2)) {
    result = args / 1024;
  }
  if(args >= Math.pow(1024, 2) && args < Math.pow(1024, 3)) {
    result = args / Math.pow(1024, 2);
  }
  if(args >= Math.pow(1024, 3) && args < Math.pow(1024, 4)) {
    result = args / Math.pow(1024, 3);
  }
  if(args >= Math.pow(1024, 4) && args < Math.pow(1024, 5)) {
    result = args / Math.pow(1024, 4);
  }
  return result.toFixed(2);
}

function hddValue(args) {
  if (args == 0) {
    result = 0;
    unit = '';
  }
  if(args !== 0 && args < 1024) {
    result = args;
    unit = '';
  }
  if(args >= 1024 && args < Math.pow(1024, 2)) {
    result = args / 1024;
    unit = 'KB';
  }
  if(args >= Math.pow(1024, 2) && args < Math.pow(1024, 3)) {
    result = args / Math.pow(1024, 2);
    unit = 'MB';
  }
  if(args >= Math.pow(1024, 3) && args < Math.pow(1024, 4)) {
    result = args / Math.pow(1024, 3);
    unit = 'GB';
  }
  if(args >= Math.pow(1024, 4) && args < Math.pow(1024, 5)) {
    result = args / Math.pow(1024, 4);
    unit = 'TB';
  }
  return result.toFixed(2) + unit;
}

 function netUnits(args){
  if (args == 0) {
    unit = 'b';
  }
  if(args !== 0 && args < 1024) {
    unit = 'B';
  }
  if(args >= 1024 && args < Math.pow(1024, 2)) {
    unit = 'KB';
  }
  if(args >= Math.pow(1024, 2) && args < Math.pow(1024, 3)) {
    unit = 'MB';
  }
  if(args >= Math.pow(1024, 3) && args < Math.pow(1024, 4)) {
    unit = 'GB';
  }
  if(args >= Math.pow(1024, 4) && args < Math.pow(1024, 5)) {
    unit = 'TB';
  }
  return unit;
}

 function netSpeed(args){
  if (args == 0) {
    result = 0;
  }
  if(args !== 0 && args < 1024) {
    result = args;
  }
  if(args >= 1024 && args < Math.pow(1024, 2)) {
    result = args / 1024;

  }
  if(args >= Math.pow(1024, 2) && args < Math.pow(1024, 3)) {
    result = args / Math.pow(1024, 2);
  }
  if(args >= Math.pow(1024, 3) && args < Math.pow(1024, 4)) {
    result = args / Math.pow(1024, 3);
  }
  if(args >= Math.pow(1024, 4) && args < Math.pow(1024, 5)) {
    result = args / Math.pow(1024, 4);
  }
  return result;
}

exports.hddUnits = hddUnits;
exports.hddSpeed = hddSpeed;
exports.hddValue = hddValue;
exports.netSpeed = netSpeed;
exports.netUnits = netUnits;