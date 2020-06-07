$(function () {
  'use strict'

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode      = 'index'
  var intersect = true

  var $salesChart_wheat = $('#sales-chart-wheat')
  var salesChart_wheat  = new Chart($salesChart_wheat, {
    type   : 'bar',
    data   : {
      labels  : ['2010/11', '2011/12', '2012/13', '2013/14', '2014/15', '2015/16', '2016/17','2017/18', '2018/19', '2019/20'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor    : '#007bff',
          data           : [7743, 7360, 5932, 5112, 10398, 7101, 5178,6931, 6732, 6040]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }
              return '' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })

  var $salesChart_corn= $('#sales-chart-corn')
  var salesChart_corn  = new Chart($salesChart_corn, {
    type   : 'bar',
    data   : {
      labels  : ['2010/11', '2011/12', '2012/13', '2013/14', '2014/15', '2015/16', '2016/17'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor    : '#007bff',
          data           : [7743, 7360, 5932, 5112, 10398, 7101, 5178]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }
              return '$' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })


  var $visitorsChart = $('#visitors-chart')
  var visitorsChart  = new Chart($visitorsChart, {
    data   : {
      labels  : ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        type                : 'line',
        data                : [31456, 33108, 33632, 43120, 40389, 35256, 37820,37761, 39415,38890],
        backgroundColor     : 'transparent',
        borderColor         : '#007bff',
        pointBorderColor    : '#007bff',
        pointBackgroundColor: '#007bff',
        fill                : false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
        {
          type                : 'line',
          data                : [23300, 25288, 27246, 37589, 29442, 27647, 32140, 30377, 32201, 32350],
          backgroundColor     : 'tansparent',
          borderColor         : '#f45d36',
          pointBorderColor    : '#f45d36',
          pointBackgroundColor: '#f45d36',
          fill                : false
          // pointHoverBackgroundColor: '#ced4da',
          // pointHoverBorderColor    : '#ced4da'
        },
        // {
        //   type                : 'line',
        //   data                : [7521, 9824, 9567, 9454, 9118, 7987, 10671, 9029, 8971, 9900],
        //   backgroundColor     : 'tansparent',
        //   borderColor         : '#ced4da',
        //   pointBorderColor    : '#ced4da',
        //   pointBackgroundColor: '#ced4da',
        //   fill                : false
        //   // pointHoverBackgroundColor: '#ced4da',
        //   // pointHoverBorderColor    : '#ced4da'
        // }],
        {
          type                : 'line',
          data                : [16575, 17352, 18953, 23268, 24170, 22091, 20218, 22000, 24404, 23000],
          backgroundColor     : 'tansparent',
          borderColor         : '#7a857d',
          pointBorderColor    : '#7a857d',
          pointBackgroundColor: '#7a857d',
          fill                : false
          // pointHoverBackgroundColor: '#ced4da',
          // pointHoverBorderColor    : '#ced4da'
        }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips           : {
        mode     : mode,
        intersect: intersect
      },
      hover              : {
        mode     : mode,
        intersect: intersect
      },
      legend             : {
        display: false
      },
      scales             : {
        yAxes: [{
          // display: false,
          gridLines: {
            display      : true,
            lineWidth    : '4px',
            color        : 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks    : $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }
              return '' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display  : true,
          gridLines: {
            display: false
          },
          ticks    : ticksStyle
        }]
      }
    }
  })
})
