import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaModel } from '../sala.model';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  salaNew: SalaModel ={
    nome: '',
    data: '',
    horaFim: '',
    horaInicio: ''
  }


  constructor(private service: SalaService, private router: Router) { }

  ngOnInit(): void {
  }

  createSala(): void {
    this.service.newSalas(this.salaNew).subscribe(
      response => {
        this.service.mensagem("Sala criada com sucesso!");
        this.router.navigate(['/salas'])
      },err => {
        for(let i = 0; i < err.error.listaErrors.length; i++) {
          this.service.mensagem(err.error.listaErrors[i].message)
        }
      }
    )
  }

  cancelar(): void {
    this.router.navigate(['/salas']);
  }

}
