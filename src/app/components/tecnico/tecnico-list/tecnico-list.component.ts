import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  
  ELEMENT_DATA : Tecnico[] = [
    {
      id: 1,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },
    {
      id: 2,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },
    {
      id: 3,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },
    {
      id: 4,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },
    {
      id: 5,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },
    {
      id: 6,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },
    {
      id: 7,
      nome: 'valdir cezar',
      cpf: '123.456.789-10',
      senha: '1234',
      email: 'valdir@email.com',
      perfis: [0],
      dataCriacao: '08/12/2022'
    },        
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 

}



