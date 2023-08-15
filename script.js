let div = document.getElementById("browser-info");

let browserName = navigator.appName;
let version = navigator.appVersion;

div.innerText = `You are using ${browserName} version ${version}`