import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaService } from '../services/sala.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup

  constructor(private service: SalaService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createSala(): void {
    this.service.newSalas(this.form.value).subscribe(
      response => {
        this.service.mensagem("Sala criada com sucesso!");
        this.router.navigate(['/salas'])
      },err => {
          this.service.mensagem("Não foi possível criar a sala");
      }
    )
  }

  cancelar(): void {
    this.router.navigate(['/salas']);
  }

  createForm(){
    this.form = this.formBuilder.group({
      nome: new FormControl(null, [
          Validators.required,
          Validators.maxLength(255)
      ]),
      data: new FormControl(null, [
          Validators.required,
          Validators.maxLength(255)
      ]),
      horaInicio: new FormControl(null, [
        Validators.required,
        Validators.maxLength(255)
      ]),
      horaFim: new FormControl(null, [
        Validators.required,
        Validators.maxLength(255)
      ])
    })
  }

}
