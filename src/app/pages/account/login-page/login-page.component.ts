import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    //criando uma dependencia, isso se chama Injeção de dependencia
    private service: DataService,
    private fb: FormBuilder
  ) {
    //Configurando o FORMS, com ReactForms
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.required,
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('petshop.token');
    if (token) {
      this.service.refreshToken().subscribe(
        (data: any) => {
          localStorage.setItem('petshop.token', data.token);
        },
        (err) => {
          localStorage.clear();
        }
      );
    }
  }

  //aqui será feita a autenticação de fato
  //estou pegando o token e armazenando no localStorage
  submit() {
    this.service.authenticate(this.form.value).subscribe(
      (data: any) => {
        localStorage.setItem('petshop.token', data.token);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
