//
//  scripts.js
//  Frame Communication Example
//
//  Created by Jesse T Youngblood on 2/9/17
//    

/* jshint strict:true, unused:true, undef:true, bitwise:true, curly:true, eqeqeq:true, freeze:true, indent:4, quotmark:true, browser:true */

// Whenever we receive a message, append it to the "results" unordered list
window.addEventListener('message', function(message) {
    'use strict';
    
    var element = document.getElementById('results');
    
    element.innerHTML += '<li>' + message.data + '</li>';
    
}, false);
