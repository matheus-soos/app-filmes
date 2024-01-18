import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [  
    MatDatepickerModule,
  ]
})
export class UserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  formUser!: FormGroup

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      genero: [''],
      idade: [''],
      data_nascimento: ['', Validators.required]
    })

    const user = this.userService.user

    if(user) {
      this.formUser.patchValue({
        username: user.username,
        password: user.password,
        email: user.email,
        genero: user.genero,
        idade: user.idade,
        data_nascimento: user.data_nascimento
      })
    }
  }

  onCadastrar() {
    const values = this.formUser.value

    this.userService.create(values)
  }
}
