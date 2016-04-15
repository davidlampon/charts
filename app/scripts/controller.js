requirejs.config({
    shim: {
        'view': {
            deps: ['vendor/d3'],
            exports: 'view'
        }
    }
});

define(['model', 'view'], function(model, view) {

  function drawCharts() {
    for (var i = 0; i < model.data.length; i++) {
      view.drawChart(model.data[i]);
    }
  }

  return {
    drawCharts : drawCharts
  }
});
