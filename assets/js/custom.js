var rellax = new Rellax('.potiron');
var rellax = new Rellax('.fruits');
var rellax = new Rellax('.coffee');
var rellax = new Rellax('.carotte');

var story = document.getElementById('story');
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');
var article1 = document.getElementById('article1');
var article2 = document.getElementById('article2');
var home = document.getElementById('home-container');
var ids = [home,story, product1, product2, product3, article1, article2];

var nav = document.getElementById('nav');
var button = document.querySelector('.menu');
button.addEventListener('click', function(){
    nav.classList.toggle('is-open');
});

ids.forEach(function(id) {
    var waypoint = new Waypoint({
        element: id,
        handler: function(direction) {
            id.classList.add('is-visible')
        },
        offset: '75%'
    })
});







