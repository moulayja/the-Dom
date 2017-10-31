// With​ ​the​ ​files​ prompt-element.html​ ​and​ ​prompt-element.js,​ ​ ​build​ ​a​ ​page​ ​with​ ​a​ ​centered​ ​div​ ​that has​ ​an​ ​id​ ​attribute​ ​container​.​ 
// ​Use​ ​window.prompt()​​ ​to​ ​ask​ ​the​ ​user​ ​to​ ​write​ ​an​ ​entire​ ​HTML element​ ​(opening​ ​tag,​ ​text,​ ​and​ ​closing​ ​tag),​ ​and​ ​change​ ​the​ ​container​ ​div​ ​to​ ​hold​ ​that​ ​tag.​ ​
// What happens​ ​when​ ​you​ ​use​ ​.innerHTML​?​ ​What​ ​happens​ ​when​ ​you​ ​use​ ​.innerText​?​ ​What happens​ ​if​ ​the​ ​user​ ​types​ ​nested​ ​HTML​ ​elements? 

var html = window.prompt("Write your html below");

document.getElementById('container').innerHTML = html; 