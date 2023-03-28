// JavaScript for pop-up
window.onload = function() {
  var popupWrapper = document.querySelector('.popup-wrapper');
  var closePopup = document.querySelector('#close-popup');
  
  if(!sessionStorage.getItem('popupDisplayed')) {
    popupWrapper.style.display = 'flex';
    sessionStorage.setItem('popupDisplayed', 'true');
  }
  
  closePopup.addEventListener('click', function() {
    popupWrapper.style.display = 'none';
  });
}
