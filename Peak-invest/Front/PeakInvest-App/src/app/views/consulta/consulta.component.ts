import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Consulta } from 'src/app/shared/models/consulta.models';
import { ConsultaService } from 'src/app/shared/service/consulta.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  consulta: Consulta;

  public consultaForm: FormGroup;
  constructor(
    public consultaServive: ConsultaService,
    private fb: FormBuilder
  ) {
    this.consultaForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])
    ]});
   }

  public buscarPorId() {
    const userId = this.consultaForm.controls.user.value;
    console.log(userId);
    this.consultaServive.getUserById(userId).subscribe(data => {
      this.consulta = data;
    });
    this.consultaForm.reset();
  }
}
