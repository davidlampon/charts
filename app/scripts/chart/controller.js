define(['chart/model', 'chart/view'], function(model, view) {

  function drawCharts() {
    var data = model.getData();

    for (var i = 0; i < data.length; i++) {
      view.drawChart(data[i]);
    }

    console.log('Charts up and running');
  }

  return {
    drawCharts : drawCharts
  }
});
