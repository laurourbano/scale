import { Component } from '@angular/core';
import { TableComponent } from '../shared/components/table/table.component';
import { Employee } from '../interfaces/employee';
import { TableColumn } from '../interfaces/table-column';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent {
  tableColumns: TableColumn[] = [];
  employeeList: Employee[] = [
    {
      nome: 'Lauro',
      entrada: '09:00',
      saidaIntervalo: '11:00',
      entradaIntervalo: '12:00',
      saida: '18:00',
      actions: ['actions', 'actions'],
    },
    {
      nome: 'Diógenes',
      entrada: '11:00',
      saidaIntervalo: '14:00',
      entradaIntervalo: '14:30',
      saida: '22:00',
      actions: ['actions', 'actions'],
    },
    {
      nome: 'Rafael',
      entrada: '08:00',
      saidaIntervalo: '12:00',
      entradaIntervalo: '13:00',
      saida: '17:00',
      actions: ['actions', 'actions'],
    },
  ];

  setTableColumns() {
    this.tableColumns = [
      { label: 'Nome', def: 'nome', dataKey: 'nome' },
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
      { label: 'Ações', def: 'actions', dataKey: 'actions' },
    ];
  }

  ngOnInit(): void {
    this.setTableColumns();
  }
}
