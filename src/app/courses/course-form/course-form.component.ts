import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})

export class CourseFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private service:CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
  ){
    this.form = this.formBuilder.group({
      name:[null],
      category:[null],
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(data =>this.onSucces(),error =>this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSucces(){
    this._snackBar.open("Curso salvo com sucesso","Ok!",{duration: 3000});
    this.onCancel()
  }

  private onError(){
    this._snackBar.open("Erro ao salvar curso","Entendido",{duration: 3000});
  }
}
