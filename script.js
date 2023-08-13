let p = document.getElementById("para");

let browserName = navigator.appName;
let version = navigator.appVersion;

p.innerText = `You are using ${browserName} version ${version}`