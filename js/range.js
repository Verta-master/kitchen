// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 10000,
    max: 50000,
    values: [ 10000, 25000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] );
      $( "#amount-max" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
});

$( function() {
  $( "#slider-range2" ).slider({
    range: true,
    min: 10,
    max: 100,
    values: [ 10, 75 ],
    slide: function( event, ui ) {
      $( "#amount-min2" ).val( ui.values[ 0 ] + " м2" );
      $( "#amount-max2" ).val( ui.values[ 1 ] + " м2" );
    }
  });
  $( "#amount-min2" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " м2" );
  $( "#amount-max2" ).val( $( "#slider-range2" ).slider( "values", 1 ) + " м2" );
});
