import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-treino',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './treino.component.html',
  styleUrl: './treino.component.scss',
})
export class TreinoComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Crie seu FormGroup no método ngOnInit() ou no construtor
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required], // Campo obrigatório
      email: ['', [Validators.required,]], // Campo obrigatório e formato de e-mail válido
    });
    console.log('Deu Certo', this.loginForm.value);
  }

  login(){
    console.log('foi?',this.loginForm.value)
  }
}
