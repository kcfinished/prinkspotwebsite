import {SearchItem} from "./SearchItem";

function greeter(person: string) {
    return "Hello, " + person;
}

//for testing
var searchItem01 = new SearchItem();
console.log(searchItem01.isTrue());

var test = "test";
var user = "Jane User";

document.body.innerHTML = greeter(user);