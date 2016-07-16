'use strict';

var NAME = 'lichess-hide';
var TITLE = document.title;

function createButton() {
  var div = document.createElement('div');
  var a = document.createElement('a');
  var content = document.createTextNode('Hide information');
  var topElement = document.getElementById('top');
  var saved = localStorage.getItem(NAME);

  div.id = NAME;
  div.className = 'fright';
  a.href = '#';
  a.className = 'toggle link';

  a.appendChild(content);
  div.appendChild(a);

  a.addEventListener('click', toggleHide);

  topElement.appendChild(div);

  if (saved && saved !== 'false') { a.click(); }
}

function toggleHide(event) {
  event.preventDefault();

  var isOn;

  this.classList.toggle('on');
  document.body.classList.toggle(NAME);

  isOn = this.classList.contains('on');

  document.title = isOn ? 'lichess.org' : TITLE;

  localStorage.setItem(NAME, isOn);
}

createButton();
