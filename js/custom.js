
$(document).ready(function() {
    $('.product-gallery').owlCarousel({
        items: 1,
        loop: false,
    });
});

$(document).ready(function() {
    // Decrease quantity
    $('.product_quantity_down').click(function(e) {
        e.preventDefault();
        var quantityInput = $('#quantityField');
        var currentVal = parseInt(quantityInput.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            quantityInput.val(currentVal - 1);
        }
    });

    // Increase quantity
    $('.product_quantity_up').click(function(e) {
        e.preventDefault();
        var quantityInput = $('#quantityField');
        var currentVal = parseInt(quantityInput.val());
        if (!isNaN(currentVal)) {
            quantityInput.val(currentVal + 1);
        }
    });
});


$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        loop: false,
        buttons: ["close"],
        transitionEffect: "fade",
      });
});
  
  