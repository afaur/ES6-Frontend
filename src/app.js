// Add own String method for uppercasing
// the first char of each word in a string.
if (!String.prototype.titleize) {
  String.prototype.titleize = function() {
    'use strict';
    var finalWords = [];
    let words = String(this).split(" ");
    for (let word of words) {
      let firstChar = word.charAt(0).toUpperCase();
      finalWords.push(firstChar + word.substr(1));
    }
    return finalWords.join(" ");
  };
}

import {Person} from './model/Person';

global.app = function () {
  var tom = new Person('tom', 'jones');
  console.log(tom.firstName);
  console.log(tom.lastName);
  console.log(tom.fullName);
};
