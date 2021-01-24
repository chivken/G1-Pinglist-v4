const axios = require('axios');
const PING_LISTS = require('@/data/pinglists');
const {DatesPinglist} = require('./DatesPinglist');
const {GeneralPinglist} = require('./GeneralPinglist');
const {SpecificsPinglist} = require('./SpecificsPinglist');

module.exports = {
  generalPinglist: () => axios(PING_LISTS.GENERAL).then(data => data.data).then(blob => GeneralPinglist(blob)),
  specificsPinglist: () => axios(PING_LISTS.SPECIFICS).then(data => data.data).then(blob => SpecificsPinglist(blob)),
  datesPinglist: () => axios(PING_LISTS.DATES).then(data => data.data).then(blob => DatesPinglist(blob)),
};
