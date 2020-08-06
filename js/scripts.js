// Javascript voor de effectjes voor de header
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 1000);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
}


// Javascript voor de pop-up 
var modalLoaded = false;
function openPopupForm() {
  $('#afspraken-popup').slideDown();
  $('body').css('overflow', 'hidden');
  if (!modalLoaded) {
    modalLoaded = true;
    $.get('pop-up.html').then((data) => {
      $('#popupForm').html(data);

      // JQuery voor de pop-up
      $('#datepicker').datepicker({
        showOtherMonths: true
      });

      $('#timepicker').timepicker({
        showOtherMonths: true
      });

      $('#dropdown-behandelingen').dropdown();

      $('#dropdown-kappers').dropdown();

      var $chkb = $('#checkbox').checkbox();
    });
  }
}

function closePopupForm() {
  $('#afspraken-popup').fadeOut();
  $('body').css('overflow', 'auto');
}


// Sluiten van de pop-up door er naast te klikken
window.onclick = function (event) {
  var modal = document.querySelector('#afspraken-popup');
  if (event.target == modal) {
    closePopupForm();
  }
}


