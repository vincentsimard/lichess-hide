'use strict';

var NAME = 'lichess-hide';

function createButton() {
  var div = document.createElement('div');
  var a = document.createElement('a');
  var content = document.createTextNode('Hide information');
  var previousElement = document.getElementById('message_notifications_parent');

  div.id = NAME;
  a.href = '#';
  a.className = 'toggle';

  a.appendChild(content);
  div.appendChild(a);

  a.addEventListener('click', toggleHide);

  previousElement.parentNode.insertBefore(div, previousElement.nextSibling);

  if (localStorage.getItem(NAME)) { a.click(); }
}

function toggleHide(event) {
  event.preventDefault();

  this.classList.toggle('on');
  document.body.classList.toggle(NAME);

  localStorage.setItem(NAME, this.classList.contains('on'));
}

createButton();
