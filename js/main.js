'use strict';

/* eslint-disable */
var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuLeft = document.querySelector('.menu-left');
var menuRight = document.querySelector('.menu-right');
var navList = document.querySelectorAll('.nav-list');

var showMenu = false;
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add('close');
    menu.classList.add('show');
    menuLeft.classList.add('show');
    menuRight.classList.add('show');
    navList.forEach(function (list) {
      return list.classList.add('show');
    });
    /** Reset show menu state*/
    showMenu = true;
  } else {
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuLeft.classList.remove('show');
    menuRight.classList.remove('show');
    navList.forEach(function (list) {
      return list.classList.add('show');
    });

    /** Reset show menu state*/
    showMenu = false;
  }
}

$(function () {
  var d = new Date();
  var hours = d.getHours();
  var night = hours >= 19 || hours <= 7; // between 7pm and 7am
  var body = document.querySelector('body');
  var toggle = document.getElementById('toggle');
  var input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function () {
    var isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  var introHeight = document.querySelector('.intro').offsetHeight;
  var topButton = document.getElementById('top-button');
  var $topButton = $('#top-button');

  window.addEventListener('scroll', function () {
    if (window.scrollY > introHeight) {
      $topButton.fadeIn();
    } else {
      $topButton.fadeOut();
    }
  }, false);

  topButton.addEventListener('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  var hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function () {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function () {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function () {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function () {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 2500,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
});