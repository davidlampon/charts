define(['common', 'vendor/d3'], function(common, d3) {

  function getBaseContainer() {
    return document.querySelector('.charts__base');
  }

  function getTemplate() {
    return document.querySelector('.charts__chart--template');
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

    var svg = d3.select('.charts__chart--' + model.title)
      .select('.charts__donut')
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    var g = svg.selectAll('.arc')
      .data(pie(model.values))
      .enter().append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .attr('class', function(d) {
        return 'charts--' + d.data.label;
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

    // var parseDate = d3.time.format('%d-%b-%y').parse;

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
        return x(d.age);
      })
      .y0(height)
      .y1(function(d) {
        return y(d.total);
      });

    var svg = d3.select('.charts__chart--' + model.title)
      .select('.charts__area')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    data.forEach(function(d) {
      d.age = d.age;
      d.total = d.total;
    });

    x.domain(d3.extent(data, function(d) {
      return d.age;
    }));
    y.domain([0, d3.max(data, function(d) {
      return d.total;
    })]);

    svg.append('path')
      .datum(data)
      .attr('class', 'charts__areaFill')
      .attr('d', area);
  }

  function setLegend(templateNode, model) {
    var legend;

    for (var i = 0; i < model.values.length; i++) {
      if (model.values[i].label === 'male') {
        legend = templateNode.querySelector('.charts__legendMale');
      } else {
        legend = templateNode.querySelector('.charts__legendFemale');
      }

      legend.querySelector('.charts__legendPercentage').textContent = (model.values[i].count * 100).toFixed(2);
      legend.querySelector('.charts__legendTotal').textContent = common.numberFormat(model.total * model.values[i].count);
    }
  }

  function drawChart(data) {
    var templateNode = document.importNode(getTemplate(), true);
    templateNode.classList.remove('charts__chart--template');
    templateNode.classList.add('charts__chart--' + data.title);
    templateNode.querySelector('.charts__titleName').textContent = data.title;
    templateNode.querySelector('.charts__titleAmount').textContent = common.numberFormat(data.total);
    setLegend(templateNode, data);
    getBaseContainer().appendChild(templateNode);
    drawDonut(data);
    drawArea(data);
  }

  function cleanChart() {
      getBaseContainer().innerHTML = '';
  }

  return {
      drawChart : drawChart,
      cleanChart : cleanChart
  }
});
