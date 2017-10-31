// With​ ​the​ ​files​ swap-list-items.html​ ​and​ s​wap-list-items.js​,​ ​build​ ​a​ ​page​ ​with​ ​four​ ​list​ ​items,​ ​each with​ ​an​ ​id​ ​attribute​ ​one​,​ ​two​,​ ​three​,​ ​or​ ​four​,​ ​and​ ​each​ ​with​ ​different​ ​text​ ​of​ ​your​ ​choosing.​ 
// ​Use window.prompt()​​ ​to​ ​query​ ​the​ ​user​ ​for​ ​an​ id ​--​ ​one,​ ​two,​ ​three,​ ​or​ ​four​ ​--​ ​and​ ​then​ ​prompt again​ ​for​ ​another​ ​id​ ​--​ ​one,​ ​two,​ ​three,​ ​or​ ​four.​ ​
// Use​ document.getElementById()​​ ​to​ ​bind the​ ​list​ ​items​ ​specified​ ​by​ ​the​ ​prompts,​ ​and​ ​then​ ​swap​ ​the​ ​text​ ​of​ ​each​ ​list​ ​item​ ​with​ ​the​ ​text​ ​of the​ ​other​ ​list​ ​item.

function switchUp() {
    var toBeSwitched = window.prompt("Choose an ID (one, two, three or four)");

    var switchingWith = window.prompt("Choose an ID (one, two, three or four)");

    var hold = document.getElementById(toBeSwitched).innerText;
    var hold2 = document.getElementById(switchingWith).innerText;

    document.getElementById(toBeSwitched).innerText = hold2;
    document.getElementById(switchingWith).innerText = hold;
}

switchUp();