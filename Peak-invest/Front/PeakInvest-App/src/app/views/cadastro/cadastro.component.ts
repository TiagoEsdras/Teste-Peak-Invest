import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      qntParcelas: ['', [Validators.required]],
      valorParcela: ['', [Validators.required]],
    });
  }

  public enviarDados() {
    const inputQntParcelas = this.cadastroForm.controls.qntParcelas.value;
    const inputValorParcela = this.cadastroForm.controls.valorParcela.value;
    console.log(inputQntParcelas);
    console.log(inputValorParcela);
  }

}
