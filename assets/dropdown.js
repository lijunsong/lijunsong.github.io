$(document).ready(function() {

  var popup = $('[data-popup]');

  function init() {
    popup.on('click', showPopup);
    $(window).on('click', removePopup);
  }

  function removePopup() {
    $(".popup-list.show").removeClass("show");
  }

  function showPopup (e) {
    e.stopPropagation();
    var popup_id = $(e.target).data("popup");
    removePopup();
    $("#"+popup_id+".popup-list").addClass("show");
  };


  init();
});
