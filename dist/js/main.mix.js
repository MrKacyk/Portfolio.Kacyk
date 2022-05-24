"use strict";var nav=document.querySelector(".nav"),allNavItems=document.querySelectorAll(".nav__item"),btn=document.querySelector(".scroll-to-top"),navMobile=document.querySelector(".nav-mobile"),navBtn=document.querySelector(".burger-btn"),footerYear=document.querySelector(".footer__year"),zoom_icons=document.querySelectorAll(".zoom-icon"),modal_overlay=document.querySelector(".modal-overlay"),slider_wrap=document.querySelector(".slider-wrap"),container=document.querySelector(".portfolio__box"),btnClose=document.querySelector(".btnClose"),images=document.querySelectorAll(".images img"),prev_btn=document.querySelector(".prev-btn"),next_btn=document.querySelector(".next-btn"),handleNavifin=function(){navMobile.classList.toggle("nav-mobile--active"),allNavItems.forEach(function(e){e.addEventListener("click",function(){navMobile.classList.remove("nav-mobile--active")})}),handleNavItemsAnimation()},handleNavItemsAnimation=function(){var n=0;allNavItems.forEach(function(e){e.classList.toggle("nav-items-animation"),e.style.animationDelay="."+n+"s",n++})},handleScrollBar=function(){var e=window.scrollY,n=document.body.getBoundingClientRect().height-window.innerHeight,e=Math.floor(e/n*100);console.log(e),25<e?btn.classList.add("active"):btn.classList.remove("active")},scrollToTop=function(){window.scroll({top:0,behavior:"smooth"})},handleNav=function(){nav.classList.toggle("shrink",60<window.scrollY)?nav.classList.remove("nav",60<window.scrollY):nav.classList.add("nav")};function initMap(){var e={lat:50.327,lng:18.784},n=new google.maps.Map(document.getElementById("map"),{zoom:12,center:e});new google.maps.Marker({position:e,map:n})}var handleCurrentYear=function(){var e=(new Date).getFullYear();footerYear.innerText=e},curentIndex=(handleCurrentYear(),window.addEventListener("scroll",handleScrollBar),window.addEventListener("scroll",handleNav),btn.addEventListener("click",scrollToTop),navBtn.addEventListener("click",handleNavifin),0),changeImage=(zoom_icons.forEach(function(e,n){return e.addEventListener("click",function(){modal_overlay.classList.add("modal-overlay--open"),slider_wrap.classList.add("slider-wrap-open"),container.classList.add("portfolio__box-container"),document.body.classList.add("stopScrolling"),changeImage(curentIndex=n)})}),btnClose.addEventListener("click",function(){modal_overlay.classList.remove("modal-overlay--open"),slider_wrap.classList.remove("slider-wrap-open"),container.classList.remove("portfolio__box-container"),document.body.classList.remove("stopScrolling")}),prev_btn.addEventListener("click",function(){0===curentIndex?curentIndex=2:curentIndex--,changeImage(curentIndex)}),next_btn.addEventListener("click",function(){2===curentIndex?curentIndex=0:curentIndex++,changeImage(curentIndex)}),function(e){images.forEach(function(e){return e.classList.remove("showImage")}),images[e].classList.add("showImage")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWxsTmF2SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuIiwibmF2TW9iaWxlIiwiem9vbV9pY29ucyIsIm1vZGFsX292ZXJsYXkiLCJzbGlkZXJfd3JhcCIsImNvbnRhaW5lciIsImJ0bkNsb3NlIiwiaW1hZ2VzIiwicHJldl9idG4iLCJuZXh0X2J0biIsInRvZ2dsZSIsImNsYXNzTGlzdCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiaGFuZGxlTmF2SXRlbXNBbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImZvckVhY2giLCJzdHlsZSIsImRlbGF5VGltZSIsImNvbnNvbGUiLCJzY3JvbGxCYXJXaWR0aCIsInNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJsZWZ0VG9TY3JvbGwiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJzY3JvbGxUb1RvcCIsImFkZCIsInRvcCIsImhhbmRsZU5hdiIsImJlaGF2aW9yIiwiaW5pdE1hcCIsInVsdXJ1IiwibG5nIiwiY2VudGVyIiwibGF0IiwibWFya2VyIiwiZ29vZ2xlIiwibWFwcyIsIk1hcmtlciIsImdldEVsZW1lbnRCeUlkIiwicG9zaXRpb24iLCJtYXAiLCJoYW5kbGVDdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInllYXIiLCJoYW5kbGVTY3JvbGxCYXIiLCJjdXJlbnRJbmRleCIsImljbiIsIm5hdkJ0biIsImhhbmRsZU5hdmlmaW4iLCJjaGFuZ2VJbWFnZSIsImluZGV4IiwiaW1nIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxJQUFNQyxTQUFTQyxjQUFjLFFBQzdCQyxZQUFjRixTQUFTRyxpQkFBaUIsY0FEeENKLElBQU1DLFNBQVNDLGNBQWMsa0JBQzdCQyxVQUFjRixT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Q1AsT0FBT3FELEdBQU9qRCxVQUFVdUIsSUFBSSIsImZpbGUiOiJtYWluLm1peC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxyXG5jb25zdCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW0nKVxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXRvLXRvcCcpXHJcbmNvbnN0IG5hdk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlJylcclxuY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1idG4nKVxyXG5jb25zdCBmb290ZXJZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9feWVhcicpXHJcblxyXG5cclxuY29uc3Qgem9vbV9pY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy56b29tLWljb24nKVxyXG5jb25zdCBtb2RhbF9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKVxyXG5jb25zdCBzbGlkZXJfd3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItd3JhcCcpXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2JveCcpXHJcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkNsb3NlJylcclxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlcyBpbWcnKVxyXG5jb25zdCBwcmV2X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2LWJ0bicpXHJcbmNvbnN0IG5leHRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtYnRuJylcclxuXHJcblxyXG5jb25zdCBoYW5kbGVOYXZpZmluID0gKCkgPT4ge1xyXG5cdG5hdk1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtbW9iaWxlLS1hY3RpdmUnKVxyXG5cdFxyXG5cdGFsbE5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRuYXZNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZS0tYWN0aXZlJylcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0aGFuZGxlTmF2SXRlbXNBbmltYXRpb24oKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVOYXZJdGVtc0FuaW1hdGlvbiA9ICgpID0+IHtcclxuXHRsZXQgZGVsYXlUaW1lID0gMFxyXG5cclxuXHRhbGxOYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtaXRlbXMtYW5pbWF0aW9uJylcclxuXHRcdGl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnLicgKyBkZWxheVRpbWUgKyAncydcclxuXHRcdGRlbGF5VGltZSsrXHJcblx0fSlcclxufVxyXG5cclxuY29uc3QgaGFuZGxlU2Nyb2xsQmFyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG5cdGNvbnN0IGxlZnRUb1Njcm9sbCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG5cdGNvbnN0IHNjcm9sbEJhcldpZHRoID0gTWF0aC5mbG9vcigoc2Nyb2xsIC8gbGVmdFRvU2Nyb2xsKSAqIDEwMClcclxuXHRjb25zb2xlLmxvZyhzY3JvbGxCYXJXaWR0aClcclxuXHJcblx0aWYgKHNjcm9sbEJhcldpZHRoID4gMjUpIHtcclxuXHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHR9XHJcblxyXG59XHJcblxyXG5jb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuXHR3aW5kb3cuc2Nyb2xsKHtcclxuXHRcdHRvcDogMCxcclxuXHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHR9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XHJcblx0aWYgKG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaHJpbmsnLCB3aW5kb3cuc2Nyb2xsWSA+IDYwKSkge1xyXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdicsIHdpbmRvdy5zY3JvbGxZID4gNjApXHJcblx0fSBlbHNlIHtcclxuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuXHRjb25zdCB1bHVydSA9IHsgbGF0OiA1MC4zMjcsIGxuZzogMTguNzg0IH1cclxuXHRjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG5cdFx0em9vbTogMTIsXHJcblx0XHRjZW50ZXI6IHVsdXJ1LFxyXG5cdH0pXHJcblx0Y29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRwb3NpdGlvbjogdWx1cnUsXHJcblx0XHRtYXA6IG1hcCxcclxuXHR9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDdXJyZW50WWVhciA9ICgpID0+IHtcclxuXHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0Zm9vdGVyWWVhci5pbm5lclRleHQgPSB5ZWFyXHJcbn1cclxuXHJcblxyXG5oYW5kbGVDdXJyZW50WWVhcigpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxCYXIpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVOYXYpXHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRvVG9wKVxyXG5uYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZpZmluKVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNb2RhbCBQb3AgVXAgQW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmxldCBjdXJlbnRJbmRleCA9IDBcclxuXHJcbnpvb21faWNvbnMuZm9yRWFjaCgoaWNuLCBpKSA9PlxyXG5cdGljbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG1vZGFsX292ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3ZlcmxheS0tb3BlbicpXHJcblx0XHRzbGlkZXJfd3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXItd3JhcC1vcGVuJylcclxuXHRcdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW9fX2JveC1jb250YWluZXInKVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wU2Nyb2xsaW5nJylcclxuXHRcdGN1cmVudEluZGV4ID0gaVxyXG5cdFx0Y2hhbmdlSW1hZ2UoY3VyZW50SW5kZXgpXHJcblx0fSlcclxuKVxyXG5cclxuXHJcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdG1vZGFsX292ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3ZlcmxheS0tb3BlbicpXHJcblx0c2xpZGVyX3dyYXAuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyLXdyYXAtb3BlbicpXHJcblx0Y29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpb19fYm94LWNvbnRhaW5lcicpXHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wU2Nyb2xsaW5nJylcclxufSlcclxuXHJcblxyXG5wcmV2X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRpZiAoY3VyZW50SW5kZXggPT09IDApIHtcclxuXHRcdGN1cmVudEluZGV4ID0gMlxyXG5cdH0gZWxzZSB7XHJcblx0XHRjdXJlbnRJbmRleC0tXHJcblx0fVxyXG5cdGNoYW5nZUltYWdlKGN1cmVudEluZGV4KVxyXG59KVxyXG5cclxubmV4dF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0aWYgKGN1cmVudEluZGV4ID09PSAyKSB7XHJcblx0XHRjdXJlbnRJbmRleCA9IDBcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y3VyZW50SW5kZXgrK1xyXG5cdH1cclxuXHRjaGFuZ2VJbWFnZShjdXJlbnRJbmRleClcclxufSlcclxuXHJcbmNvbnN0IGNoYW5nZUltYWdlID0gaW5kZXggPT4ge1xyXG5cdGltYWdlcy5mb3JFYWNoKGltZyA9PiBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0ltYWdlJykpXHJcblx0aW1hZ2VzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93SW1hZ2UnKVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLyJdfQ==
