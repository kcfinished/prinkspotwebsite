"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchItem_1 = require("./SearchItem");
function greeter(person) {
    return "Hello, " + person;
}
var searchItem01 = new SearchItem_1.SearchItem();
console.log(searchItem01.isTrue());
var test = "test";
var user = "Jane User";
document.body.innerHTML = greeter(user);
