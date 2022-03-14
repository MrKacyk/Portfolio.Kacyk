"use strict";var nav=document.querySelector(".nav"),btn=document.querySelector(".scroll-to-top"),navMobile=document.querySelector(".nav-mobile"),navBtn=document.querySelector(".burger-btn"),footerYear=document.querySelector(".footer__year"),handleNavifin=function(){navMobile.classList.toggle("nav-mobile--active")},handleScrollBar=function(){var e=window.scrollY,n=document.body.getBoundingClientRect().height-window.innerHeight,e=Math.floor(e/n*100);console.log(e),30<e?btn.classList.add("active"):btn.classList.remove("active")},scrollToTop=function(){window.scroll({top:0,behavior:"smooth"})},handleNav=function(){nav.classList.toggle("shrink",200<window.scrollY)?nav.classList.remove("nav",200<window.scrollY):nav.classList.add("nav")};function initMap(){var e={lat:50.327,lng:18.784},n=new google.maps.Map(document.getElementById("map"),{zoom:12,center:e});new google.maps.Marker({position:e,map:n})}var handleCurrentYear=function(){var e=(new Date).getFullYear();footerYear.innerText=e};handleCurrentYear(),window.addEventListener("scroll",handleScrollBar),window.addEventListener("scroll",handleNav),btn.addEventListener("click",scrollToTop),navBtn.addEventListener("click",handleNavifin);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuIiwibmF2TW9iaWxlIiwiZm9vdGVyWWVhciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhhbmRsZVNjcm9sbEJhciIsInNjcm9sbFkiLCJsZWZ0VG9TY3JvbGwiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwic2Nyb2xsQmFyV2lkdGgiLCJmbG9vciIsInNjcm9sbCIsImxvZyIsImFkZCIsInJlbW92ZSIsInRvcCIsImJlaGF2aW9yIiwidWx1cnUiLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZ2V0RWxlbWVudEJ5SWQiLCJ6b29tIiwiY2VudGVyIiwicG9zaXRpb24iLCJtYXJrZXIiLCJoYW5kbGVDdXJyZW50WWVhciIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTmF2Iiwic2Nyb2xsVG9Ub3AiLCJoYW5kbGVOYXZpZmluIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxJQUFNQyxTQUFTQyxjQUFjLFFBQzdCQyxJQUFNRixTQUFTQyxjQUFjLGtCQUQ3QkYsVUFBY0MsU0FBQ0MsY0FBckIsZUFDTUMsT0FBTUYsU0FBU0MsY0FBYyxlQUM3QkUsV0FBWUgsU0FBU0MsY0FBYyxpQkFFbkNHLGNBQWFKLFdBR2RHLFVBQVVFLFVBQVVDLE9BQU8sdUJBSTFCQyxnQkFBa0IsV0FBeEIsSUFBTUEsRUFBQUEsT0FBa0JDLFFBR2pCQyxFQUFlVCxTQUFTVSxLQUFLQyx3QkFBd0JDLE9BQVNDLE9BQU9DLFlBRzNFQyxFQUFZQyxLQUFaQyxNQUFBQyxFQUFBVCxFQUFBLEtBQUFNLFFBQVFJLElBQUlILEdBR08sR0FBbEJkLEVBQ0FBLElBRkRHLFVBRU9lLElBQUEsVUFFTmxCLElBQUFHLFVBQUFnQixPQUFBLFdBSURSLFlBQWMsV0FDYlMsT0FBR0osT0FEVSxDQUViSyxJQUFBQSxFQUZhQSxTQUFkLFlBT0l4QixVQUFJTSxXQUNQTixJQUFJTSxVQUFVZ0IsT0FBTyxTQUFyQixJQUE0QlIsT0FBT0wsU0FDbkNULElBRkRNLFVBRU9nQixPQUFBLE1BQUEsSUFBQVIsT0FBQUwsU0FFTlQsSUFBQU0sVUFBQWUsSUFBQSxRQUlELFNBQU1JLFVBQVVDLElBQUdELEVBQUwsQ0FBQUMsSUFBQSxPQUFBQyxJQUFBLFFBQWtCQyxFQUFFLElBQUFDLE9BQUFDLEtBQUFDLElBQUE5QixTQUFBK0IsZUFBQSxPQUFBLENBQXBCQyxLQUFkLEdBQ0FDLE9BQVNULElBRUFBLElBQUFBLE9BQUFBLEtBQUFBLE9BQUFBLENBRnVEVSxTQUFoRVYsRUFJQUcsSUFBTVEsSUFJTixJQUFBQyxrQkFBQSxXQUdBLElBQU1DLEdBQU8sSUFBSUMsTUFBT0MsY0FEekJuQyxXQUFNZ0MsVUFBb0JDLEdBR3pCRCxvQkFHRHZCLE9BQU8yQixpQkFBaUIsU0FBVWpDLGlCQURsQzZCLE9BQUFBLGlCQUFpQixTQUFBSyxXQUNqQjVCLElBQUFBLGlCQUFPMkIsUUFBaUJFLGFBQ3hCN0IsT0FBTzJCLGlCQUFpQixRQUF4QkciLCJmaWxlIjoibWFpbi5taXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JylcclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC10by10b3AnKVxyXG5jb25zdCBuYXZNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZScpXHJcbmNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYnRuJylcclxuY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3llYXInKVxyXG5cclxuY29uc3QgaGFuZGxlTmF2aWZpbiA9ICgpID0+IHtcclxuXHRpZiAobmF2TW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tb2JpbGUtLWFjdGl2ZScpKSB7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVTY3JvbGxCYXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2Nyb2xsID0gd2luZG93LnNjcm9sbFlcclxuXHJcblx0Y29uc3QgbGVmdFRvU2Nyb2xsID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcblx0Y29uc3Qgc2Nyb2xsQmFyV2lkdGggPSBNYXRoLmZsb29yKChzY3JvbGwgLyBsZWZ0VG9TY3JvbGwpICogMTAwKVxyXG5cdGNvbnNvbGUubG9nKHNjcm9sbEJhcldpZHRoKVxyXG5cclxuXHRpZiAoc2Nyb2xsQmFyV2lkdGggPiAzMCkge1xyXG5cdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0fSBlbHNlIHtcclxuXHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcblx0d2luZG93LnNjcm9sbCh7XHJcblx0XHR0b3A6IDAsXHJcblx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0fSlcclxufVxyXG5cclxuY29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xyXG5cdGlmIChuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hyaW5rJywgd2luZG93LnNjcm9sbFkgPiAyMDApKSB7XHJcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2Jywgd2luZG93LnNjcm9sbFkgPiAyMDApXHJcblx0fSBlbHNlIHtcclxuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuXHRjb25zdCB1bHVydSA9IHsgbGF0OiA1MC4zMjcsIGxuZzogMTguNzg0IH1cclxuXHRjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG5cdFx0em9vbTogMTIsXHJcblx0XHRjZW50ZXI6IHVsdXJ1LFxyXG5cdH0pXHJcblx0Y29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRwb3NpdGlvbjogdWx1cnUsXHJcblx0XHRtYXA6IG1hcCxcclxuXHR9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDdXJyZW50WWVhciA9ICgpID0+IHtcclxuXHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0Zm9vdGVyWWVhci5pbm5lclRleHQgPSB5ZWFyXHJcbn1cclxuXHJcbmhhbmRsZUN1cnJlbnRZZWFyKClcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbEJhcilcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZU5hdilcclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9Ub3ApXHJcbm5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdmlmaW4pXHJcbiJdfQ==