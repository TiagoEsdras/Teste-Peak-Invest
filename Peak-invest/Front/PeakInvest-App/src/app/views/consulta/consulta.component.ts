import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  public consultaForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.consultaForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])
    ]});
   }

  public buscarPorId() {
    const userId = this.consultaForm.controls.user.value;
    console.log(userId);
  }
}
