// Copyright 2018 Elias Ojala. All rights reserved.

'use strict';


// https://stackoverflow.com/a/23945027/6451184
function extractHostname(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("://") > -1) {
      hostname = url.split('/')[2];
  }
  else {
      hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}


// Elements
let ipAddressElement = document.getElementById('ipAddress');
let domainElement = document.getElementById('domain');
let openIPlookupBtn = document.getElementById('openIplookup');
let debugElement = document.getElementById('debugElement');

// Set ip address
let ipAddress = undefined;
ipAddressElement.innerText = ipAddress;

// Set hostname etc
chrome.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  let pageUrl = tabs[0].url;
  
  let hostname = extractHostname(pageUrl);
  domainElement.innerText = hostname;

  openIplookup.href =
    "https://iplookup.theel0ja.info/chrome-link?host=" + hostname + "&ip=" + ipAddressElement.innerText + "&v=" + chrome.app.getDetails().version;

  // debugElement.innerHTML = JSON.stringify(ipAddress);

  // ipAddressElement.innerText = ipAddress;
});