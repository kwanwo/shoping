"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetail = getDetail;

var _request = require("./request");

function getDetail(iid) {
  return (0, _request.request)({
    url: 'detail',
    params: {
      iid: iid
    }
  });
}