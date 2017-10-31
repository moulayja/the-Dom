// With​ ​the​ ​files​ ​update-list-items.html​ ​and​ ​update-list-items.js​,​ ​build​ ​a​ ​page​ ​with​ ​four​ ​list​ ​items, each​ ​with​ ​an​ ​id​ ​attribute​ 
// ​one​,​ ​two,​ ​ ​three​,​ ​or​ ​four​,​ ​and​ ​each​ ​with​ ​different​ ​text​ ​of​ ​your​ ​choosing. Use​ ​window.prompt()​​ ​to​ ​query​ ​the​ ​user​ ​first​ ​for​ ​an​ ​id​ ​--​ ​
// one,​ ​two,​ ​three,​ ​or​ ​four​ ​--​ ​and​ ​then prompt​ ​separately​ ​for​ ​a​ ​string.​ ​Use​ ​document.getElementById()​​ ​to​ ​bind​ ​the​ ​list​ ​item specified​ ​in​ ​the​ ​initial​ ​prompt,​ ​
// and​ ​change​ ​the​ ​text​ ​of​ ​that​ ​list​ ​item​ ​to​ ​the​ ​string​ ​input​ ​from​ ​the second​ ​prompt.​ ​If​ ​the​ ​user's​ ​first​ ​input​ ​is​ ​not​ ​"one",​ ​"two",​ ​"three",​ ​or​ ​"four",​ ​
// then​ ​simply​ ​change the​ ​text​ ​of​ ​the​ first​ ​list​ ​item.

function updateList() {
    let listItem = window.prompt("Type: one, two, three, four").toLowerCase();
    let itemText = window.prompt("Add to the list.");
    let items = ["one", "two", "three", "four"];

    if (!items.includes(listItem)) {
        document.getElementById("one").innerHTML = itemText;
    } else {
        document.getElementById(listItem).innerHTML = itemText;
    }

}

updateList();