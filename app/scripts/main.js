requirejs.config({
  paths: {
    jquery : 'vendor/jquery-2.2.3.min',
    slick : 'vendor/slick.min'
  }
});

require(['chart/controller', 'map/controller', 'gallery/controller'], function(chart, map, gallery) {
  // chart.drawCharts();
  map.init();
  gallery.init();
});
