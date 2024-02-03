import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableColumn } from '../../../interfaces/table-column';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  dataSource: any = [];
  columnsToDisplay: string[] = [];
  tableColumns: TableColumn[] = [];

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.columnsToDisplay = this.tableColumns.map((col) => col.def);
  }

}
