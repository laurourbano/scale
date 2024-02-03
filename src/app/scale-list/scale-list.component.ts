import { Component } from '@angular/core';
import { TableComponent } from '../shared/components/table/table.component';
import { Scale } from '../interfaces/scale';
import { TableColumn } from '../interfaces/table-column';

@Component({
  selector: 'app-scale-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './scale-list.component.html',
  styleUrl: './scale-list.component.scss',
})
export class ScaleListComponent {
  tableColumns: TableColumn[] = [];
  scaleList: Scale[] = [
    {
      id: '1',
      entrada: '08:00',
      saida: '19:00',
    },
    {
      id: '2',
      entrada: '08:00',
      saida: '22:00',
    },
  ];

  setTableColumns() {
    this.tableColumns = [
      { label: 'ID', def: 'id', dataKey: 'id' },
      { label: 'Entrada', def: 'entrada', dataKey: 'entrada' },
      {
        label: 'Saída Intervalo',
        def: 'saidaIntervalo',
        dataKey: 'saidaIntervalo',
      },
      {
        label: 'Entrada Intervalo',
        def: 'entradaIntervalo',
        dataKey: 'entradaIntervalo',
      },
      { label: 'Saída', def: 'saida', dataKey: 'saida' },
    ];
  }

  ngOnInit(): void {
    this.setTableColumns();
  }
}
