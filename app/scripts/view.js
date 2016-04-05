define(['common', 'd3'], function(common, d3) {

  function getBaseContainer() {
    return document.querySelector('.marfeelCharts__base');
  }

  function getTemplate() {
    return document.querySelector('.marfeelCharts__chart--template');
  }

  function drawDonut(model) {
    var width = 304,
      height = 184,
      donutWidth = 8,
      radius = Math.min(width, height) / 2;

    var arc = d3.svg.arc()
      .outerRadius(radius - donutWidth)
      .innerRadius(radius);

    var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
        return d.count;
      });

    var svg = d3.select('.marfeelCharts__chart--' + model.title)
      .select('.marfeelCharts__donut')
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    var g = svg.selectAll('.arc')
      .data(pie(model.values))
      .enter().append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .attr('class', function(d) {
        return 'marfeelCharts--' + d.data.label;
      });
  }

  function drawArea(model) {
    var data = model.evolution;

    var margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      width = 150 - margin.left - margin.right,
      height = 60 - margin.top - margin.bottom;

    var parseDate = d3.time.format('%d-%b-%y').parse;

    var x = d3.time.scale()
      .range([0, width]);

    var y = d3.scale.linear()
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

    var area = d3.svg.area()
      .x(function(d) {
        return x(d.date);
      })
      .y0(height)
      .y1(function(d) {
        return y(d.close);
      });

    var svg = d3.select('.marfeelCharts__chart--' + model.title)
      .select('.marfeelCharts__area')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.close = +d.close;
    });

    x.domain(d3.extent(data, function(d) {
      return d.date;
    }));
    y.domain([0, d3.max(data, function(d) {
      return d.close;
    })]);

    svg.append('path')
      .datum(data)
      .attr('class', 'marfeelCharts__areaFill')
      .attr('d', area);
  }

  function setLegend(templateNode, model) {
    var legend;

    for (var i = 0; i < model.values.length; i++) {
      if (model.values[i].label === 'smartphone') {
        legend = templateNode.querySelector('.marfeelCharts__legendSmartphone');
      } else {
        legend = templateNode.querySelector('.marfeelCharts__legendTablet');
      }

      legend.querySelector('.marfeelCharts__legendPercentage').textContent = model.values[i].count * 100;
      legend.querySelector('.marfeelCharts__legendTotal').textContent = common.numberFormat(model.total * model.values[i].count);
    }
  }

  function drawChart(data) {
    var templateNode = document.importNode(getTemplate(), true);
    templateNode.classList.remove('marfeelCharts__chart--template');
    templateNode.classList.add('marfeelCharts__chart--' + data.title);
    templateNode.querySelector('.marfeelCharts__titleName').textContent = data.title;
    templateNode.querySelector('.marfeelCharts__titleAmount').textContent = common.numberFormat(data.total);
    setLegend(templateNode, data);
    getBaseContainer().appendChild(templateNode);
    drawDonut(data);
    drawArea(data);
  }

  return {
      drawChart : drawChart
  }
});
