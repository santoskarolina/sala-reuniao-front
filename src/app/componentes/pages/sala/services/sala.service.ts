import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SalaModel } from '../sala.model';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  baseUrl: String  = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  getAllSalas(): Observable<SalaModel[]>{
    const url = `${this.baseUrl}/api/v1/salas`;
    return this.http.get<SalaModel[]>(url);
  }

  getSalaIdIid(id: string): Observable<SalaModel>{
    const url = `${this.baseUrl}/api/v1/salas/${id}`;
    return this.http.get<SalaModel>(url);
  }

  newSalas(sala: SalaModel): Observable<SalaModel>{
    const url = `${this.baseUrl}/api/v1/salas`;
    return this.http.post<SalaModel>(url,sala);
  }

  deleteSala(id: string): Observable<void>{
    const url = `${this.baseUrl}/api/v1/salas/${id}`;
    return this.http.delete<void>(url);
  }

  updateSala(sala: SalaModel): Observable<SalaModel>{
    const url = `${this.baseUrl}/api/v1/salas/${sala.id}`;
    return this.http.put<SalaModel>(url,sala);
  }

  mensagem(string: String): void{
    this.snack.open(`${string}`, 'OK', 
    {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
