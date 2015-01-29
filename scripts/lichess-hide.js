'use strict';

// var lichess = {};

// lichess.el = document.querySelector('#lichess');
// lichess.elTable = lichess.el.querySelector('.lichess_ground .table');
// lichess.elBoard = lichess.el.querySelector('.lichess_board');
// lichess.elPlayerClock = lichess.el.querySelector('.clock_bottom');

function createButton() {
  var div = document.createElement('div');
  var a = document.createElement('a');
  var content = document.createTextNode('Hide stuff');
  var previousElement = document.getElementById('message_notifications_parent');

  div.id = 'lichess-hide';
  a.href = '#';
  a.className = 'toggle';
  a.appendChild(content);
  div.appendChild(a);

  previousElement.parentNode.insertBefore(div, previousElement.nextSibling);
}

createButton();

console.log('lichess-hide');
