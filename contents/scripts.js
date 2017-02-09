//
//  contents/scripts.js
//  Frame Communication Example
//
//  Created by Jesse T Youngblood on 2/9/17
// 

/* jshint strict:true, unused:true, undef:true, bitwise:true, curly:true, eqeqeq:true, freeze:true, indent:4, quotmark:true, browser:true */
/* global alert */

// When the user clicks the "send" button, 
function sendMessage() {
    'use strict';
    
    var message, input;
    
    input = document.getElementById('input');
    
    message = input.value;
    
    if (message === '') {
        
        alert('Please enter a message to send');
        return;
    }
    
    // By specifying an asterisk as the target origin, we can send a message to the host even if we don't know what the domain is_dir
    // See more: https://developer.mozilla.org/docs/Web/API/Window/postMessage
    parent.postMessage(message, '*');
 
    // Clean out the input box for the next message
    input.value = '';
}
