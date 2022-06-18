import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { cargarSesion, loginAction } from 'src/app/components/dashboard/auth/auth.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading:boolean = false;
  datoUsuario: string | null;

  constructor( 
    private authService: AuthService,
    private ruta: Router,
    private store: Store,
    private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]

    })
    
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

    this.authService
    .IniciarSesion(usuario, contraseña)
    .subscribe((data: Usuario) => {
      if (data) {
        console.log("")
        this.store.dispatch(cargarSesion({ data }));

        this.authService.establecerSesion(true, data);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de credenciales',
          confirmButtonColor: '#0D47A1',
        });
      }
    });
  this.store.dispatch(
    loginAction({ usuario: usuario, contrasena: contraseña })
  );
   
    }
  

  error(){
    this._snackBar.open('Usuario o contraseña incorrecta','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    })
  }

  cargando(){
    this.loading=true;
    setTimeout(() => {
      this.ruta.navigate(['dashboard']);
    }, 1500);
  }
}
