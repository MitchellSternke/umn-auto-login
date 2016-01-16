// ==UserScript==
// @include https://idp2.shib.umn.edu/*
// @include https://idp2.shib.umn.edu/
 
// ==/UserScript== 
var username = "";
var password = "";
document.getElementById("f_username").value = username;
document.getElementById("f_password").value = password;
document.getElementsByClassName("submit")[0].click();