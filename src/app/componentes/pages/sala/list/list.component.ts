import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SalaModel } from '../sala.model';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  salasList: SalaModel[] = [];

  constructor(private service: SalaService) { }

  ngOnInit(): void {
    this.getAllSalas();
  }

  getAllSalas(): void {
    this.service.getAllSalas().subscribe(
      response => {
        this.salasList = response;
      }
    )
  }

}
