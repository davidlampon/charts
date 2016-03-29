requirejs(['model', 'view', 'd3'], function(model, view, d3) {

  var data = getData();
  var base = getBaseContainer();
  var template = getTemplate();

  for (var i = 0; i < data.length; i++) {
    var templateNode = document.importNode(template, true);
    templateNode.classList.remove('marfeelCharts__chart--template');
    templateNode.classList.add('marfeelCharts__chart--' + data[i].title);

    templateNode.querySelector('.marfeelCharts__titleName').textContent = data[i].title;
    templateNode.querySelector('.marfeelCharts__titleAmount').textContent = numberFormat(data[i].total);

    setLegend(templateNode, data[i]);

    base.appendChild(templateNode);

    drawDonut(data[i]);
    drawArea(data[i]);
  }

  console.log('Marfeel charts up and running');
});
