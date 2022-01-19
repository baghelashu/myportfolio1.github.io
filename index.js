const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function () {
    if (topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });


//Nasa API
function displayImage(data) {
    $('<img>', {
        src: data.url,
        height: '100%',
        width: '100%'
    }).appendTo('#image-container-nasa');
    console.log(data.url);
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method: 'GET',
    success: displayImage
});

// $.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',function(data){
//     var imageUrl = data.url;
//     $('#nasa').attr('src',imageUrl);
// })




//Back TO top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});