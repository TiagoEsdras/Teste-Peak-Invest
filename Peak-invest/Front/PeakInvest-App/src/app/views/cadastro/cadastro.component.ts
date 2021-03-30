import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Cadastro } from 'src/app/shared/models/cadastro.model';
import { CadastroService } from 'src/app/shared/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public cadastroForm: FormGroup;

  cadastro: Cadastro;

  constructor(
    private fb: FormBuilder,
    private rest: CadastroService
  ) {  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      qntParcela: ['', [Validators.required]],
      valorParcela: ['', [Validators.required]],
    });
  }

  public enviarDados() {
    this.rest.calcularValorEmprestimo(this.cadastroForm.value).subscribe(data => {
      this.cadastro = data;
    });
    this.cadastroForm.reset();
  }
}
