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
