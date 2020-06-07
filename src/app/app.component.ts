import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent} from './dialog-box/dialog-box.component';
import { MatPaginator } from '@angular/material/paginator';


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

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}
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
  addRowData(row_obj){
    let data_add = {Year: row_obj.Year, DC: row_obj.DC, FDC: row_obj.FDC, FSI: row_obj.FSI, AH: row_obj.AH, YI: row_obj.YI};
    this.dataSource.data.push(data_add);
    this.table.renderRows();
  }

}

