import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-treino',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './treino.component.html',
  styleUrl: './treino.component.scss'
})
export class TreinoComponent implements OnInit{

public form!: FormGroup

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        pr: ['', Validators.maxLength(10)],
        pl: [''],
      })
  }
  salvar(){
    console.log(this.form.value)
  }
}
