define(['chart/view'], function(view) {

  function drawCharts(data) {
    view.cleanChart();
    for (var i = 0; i < data.length; i++) {
      view.drawChart(data[i]);
    }
  }

  return {
    drawCharts : drawCharts
  }
});
