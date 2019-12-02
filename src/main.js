import { pingPong } from './ping-pong';
import Character from './character.js';
import Enemy from './enemy.js';
import Item from './item.js';
import Itemlist from './itemList.js'
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
