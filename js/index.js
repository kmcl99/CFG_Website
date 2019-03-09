// web page is rendered in the browser before any
//jQuery code executes.
$(document).ready(() => {

//navbar dropdowns

  $('#CafeDropdown').on('click', () => {
    $('#cafe-dd-menu').show();
    })
    
  $('#TeahouseDropdown').on('click', () => {
    $('#teahouse-dd-menu').show();
  })



  $('#carouselIndicators').carousel({
    interval: 2000
  })

  $('.accordian').collapse({
    toggle: false
  })

  $().button('toggle')

})
