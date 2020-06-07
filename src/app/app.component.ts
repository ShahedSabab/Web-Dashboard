import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent} from './dialog-box/dialog-box.component';
import { MatPaginator } from '@angular/material/paginator';
import { Ng6O2ChartModule } from 'ng6-o2-chart';
import * as ChartConst from 'ng6-o2-chart';
import {red} from 'color-name';

export interface PeriodicElement {
  Year: number;
  DC: number;
  FDC: number;
  FSI: number;
  AH: number;
  YI: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Year: 2010, DC: 7521, FDC: 2550, FSI: 4971, AH: 8296, YI: 2.81},
  {Year: 2011, DC: 9824, FDC: 4577, FSI: 5247, AH: 8553, YI: 2.96},
  {Year: 2012, DC: 9567, FDC: 4474, FSI: 5093, AH: 9479, YI: 2.87},
  {Year: 2013, DC: 9454, FDC: 4221, FSI: 5233, AH: 10447, YI: 3.60},
  {Year: 2014, DC: 9118, FDC: 3975, FSI: 5143, AH: 9554, YI: 3.08},
  {Year: 2015, DC: 7987, FDC: 2819, FSI: 5168, AH: 9558, YI: 2.89},
  {Year: 2016, DC: 10671, FDC: 5823, FSI: 4848, AH: 8976, YI: 3.58},
  {Year: 2017, DC: 9029, FDC: 4132, FSI: 4897, AH: 8983, YI: 3.38},
  {Year: 2018, DC: 8971, FDC: 3982, FSI: 4989, AH: 9881, YI: 3.26},
  {Year: 2019, DC: 9900, FDC: 4900, FSI: 5000, AH: 9660, YI: 3.35},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['Year', 'DC', 'FDC', 'FSI', 'AH', 'YI'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'webDashboard';
  product = 'Wheat';
  packLayoutTypeName: string;
  pieTypeName: string;
  packLayoutDataJson: any;
  pieDataJson: any;
  configData: any;
  stackBarDataJson: any;
  stackBarTypeName: string;
  barDataJson: any;
  barTypeName: string;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {
    this.packLayoutTypeName 	= ChartConst.PACK_LAYOUT_CHART_TYPE_NAME;
    this.pieTypeName = ChartConst.PIE_CHART_TYPE_NAME;
    this.stackBarTypeName  = ChartConst.STACK_BAR_CHART_TYPE_NAME;
    this.barTypeName     	= ChartConst.BAR_CHART_TYPE_NAME;
    this.initilizeData();
  }
  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
        this.addRowData(result.data);
    });
  }
  // tslint:disable-next-line:variable-name
  addRowData(row_obj){
    // tslint:disable-next-line:variable-name
    const data_add = {Year: row_obj.Year, DC: row_obj.DC, FDC: row_obj.FDC, FSI: row_obj.FSI, AH: row_obj.AH, YI: row_obj.YI};
    this.dataSource.data.push(data_add);
    this.table.renderRows();
  }
  private initilizeData() {
    this.configData = {
      // tslint:disable-next-line:quotemark
      className: {
        axis: 'axis',
        axisXBorder: 'axis_x',
        axisXText: 'axis-x-text',
        bar: 'bar',
        barValue: 'bar-value',
        line: 'line',
        multiLinePrefix: 'line-',
        grid: 'grid',
        pie: 'pie',
        pieInnerTitle: 'pie-inner-title',
        pieInnerRadius: 'total',
        histogram: 'histogram',
        histogramBar: 'histogram-bar',
        treemap: 'treemap',
        treemapLabel: 'treemap-label',
        packlayout: 'packlayout',
        packlayoutLabel: 'packlayout-label',
      },
      label: {
        display: true,
      },
      title: {
        display: false,
        name: '',
        className: 'chart-title',
        height: 30,
        leftMargin: -20,
        bottomMargin: 10
      },
      maxValue: {
        auto: true,
        x: 100,
        y: 100,
      },
      legend: {
        display: true,
        position: 'left',
        totalWidth: 0,
        initXPos: 20,
        initYPos: -50,
        rectWidth: 15,
        rectHeight: 15,
        xSpacing: 2,
        ySpacing: 2
      },
      color: {
        auto: true, //
        defaultColorNumber: 5,
        opacity: 0.8,
        userColors: [
          'blue',
          'red',
          'green',
          'yellow',
          'PaleGoldenrod',
          'Khaki',
          'DarkKhaki',
          'Gold',
          'Cornsilk',
          'BlanchedAlmond',
          'Bisque',
          'NavajoWhite',
          'Wheat',
          'BurlyWood',
          'Tan',
          'RosyBrown',
          'SandyBrown',
          'Goldenrod',
          'DarkGoldenrod',
          'Peru',
          'Chocolate'
        ],
        focusColor: 'red',
      },
      pie: {
        innerRadius: {
          percent: 20,
          title: 'Total'
        },
        value: {
          display: true,
        },
        percent: {
          display: false,
        }
      },
      line: {
        legend: 'lineEnd',
        interpolate : 'linear',
      },
      grid: {
        x: {
          display: true,
        },
        y: {
          display: true,
        },
      },
      margin: {
        top: 30,
        left: 30,
        right: 10,
        bottom: 20,
        between: 5
      },
      axis: {
        rotation: 0,
        borderLineWidth: 1,
        xLabel: {
          leftMargin: 0,
          bottomMargin: 5
        },
        yLabel: {
          leftMargin: 0,
          bottomMargin: 0
        },
      },
      animation: {
        enable: true,
        duration: 4000,
      },
    };

    this.packLayoutDataJson = {
      name: 'United States', value : 606494, color: '#FFFFFF',
      children : [
        {name: 'Europe', value : 154000},
        {name: 'China', value : 133590},
        {name: 'India', value : 103600},
        {name: 'Russia', value : 73610},
        {name: ' USA', value : 52258},
        {name: 'Canada', value : 32350},
        {name: 'Ukraine', value : 29171},
      ]
    };
    this.pieDataJson =
      {
        data: [
          {
            name: 'software',
            value: 30,
          },
          {
            name: 'hardware',
            value: 25
          },
          {
            name: 'device',
            value: 16
          },
          {
            name: 'others',
            value: 4
          },
        ],
      };
    this.barDataJson =
      {
        series: [
          'TY Imports',
          'Ty. Imp from US'
        ],
        data: [
          {
            x: '2014',
            y: [544, 352],
          },
          {
            x: '2015',
            y: [510, 345],
          },
          {
            x: '2016',
            y: [506, 334],
          },
          {
            x: '2017',
            y: [451, 264],
          },
          {
            x: '2018',
            y: [478, 290],
          },
          {
            x: '2019',
            y: [500, 0]
          },
        ],
      };
  }

}

