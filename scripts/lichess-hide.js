'use strict';

function createButton() {
  var div = document.createElement('div');
  var a = document.createElement('a');
  var content = document.createTextNode('Hide information');
  var previousElement = document.getElementById('message_notifications_parent');

  div.id = 'lichess-hide';
  a.href = '#';
  a.className = 'toggle';

  a.appendChild(content);
  div.appendChild(a);

  a.addEventListener('click', toggleHide);

  previousElement.parentNode.insertBefore(div, previousElement.nextSibling);

}

function toggleHide(event) {
  event.preventDefault();

  this.classList.toggle('on');
}

createButton();

