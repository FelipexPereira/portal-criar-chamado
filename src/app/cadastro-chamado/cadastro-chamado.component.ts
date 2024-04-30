import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface TipoChamado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-chamado',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cadastro-chamado.component.html',
  styleUrl: './cadastro-chamado.component.scss',
})
export class CadastroChamadoComponent {
  tipoChamado: TipoChamado[] = [
    { value: 'hardware', viewValue: 'Hardware' },
    { value: 'software', viewValue: 'Software' },
    { value: 'desenvolvimento', viewValue: 'Desenvolvimento' },
  ];

  public cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      usuario: ['Felipe Pereira'],
      setor: ['TI'],
      tipoChamado: ['', Validators.required],
      resumo: ['', Validators.required],
    });

    console.log('FUNCIONA', this.cadastroForm.value);
  }

  public onClick() {
    console.log('click', this.cadastroForm.value);
  }
}
