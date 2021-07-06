import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaModel } from '../sala.model';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  salaDetails: SalaModel ={
    id: '',
    nome: '',
    data: '',
    horaFim: '',
    horaInicio: ''
  }

  constructor(private router: Router, private service: SalaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.salaDetails.id = this.route.snapshot.paramMap.get('id');
    this.getById();
}

  getById(): void {
    this.service.getSalaIdIid(this.salaDetails.id).subscribe(
      reponse => {
        this.salaDetails = reponse;
      }
    )
  }

  delete(): void{
    this.service.deleteSala(this.salaDetails.id).subscribe(
      response => {
        this.service.mensagem(`Sala ${this.salaDetails.id} deletada com sucesso!`);
        this.router.navigate(['/salas']);
      }
    )
  }
}
