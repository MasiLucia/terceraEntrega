import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map,Observable,tap } from 'rxjs';
import { LordValdomeroGuard } from './lord-valdomero.guard';
import { Usuario } from './shared/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sesion: any = {
    activa: false,
    usuario: {},
  };

  rol: any;

  isLogin() {
    return false;
  }


  isAuthenticatedSrc: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    JSON.parse(localStorage.getItem('session') || 'false')
  );

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSrc.asObservable();
  }

  get isAdmin(): Observable<boolean> {
    return this.rol;
  }
  URL_SERVICIOS: "https://626333a9c430dc560d2cad4e.mockapi.io";





  constructor(private http: HttpClient, private ruta: Router) {
    var values = JSON.parse(localStorage.getItem('session') || 'false');
    if (values.usuario !== undefined) {
      if (values.usuario.rol === 1) {
        this.rol = true;
      } else {
        this.rol = false;
      }
    } else {
      this.rol = false;
    }
  }

  IniciarSesion(usuario: string, contrasena: string): Observable<Usuario> {
    return this.http
      .get<Usuario[]>("https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/usuarios")
      .pipe(
        map((usuarios: Usuario[]) => {
          return usuarios.filter(
            (u) => u.usuario === usuario && u.contrasena === contrasena
          )[0];
        })
      )
      .pipe(
        tap((res: any) => {
          if (res) {
            this.isAuthenticatedSrc.next(true);
            if (res.rol == 1) {
              this.rol = true;
            } else {
              this.rol = false;
            }
          }
        })
      );
  }
  CerrarSesion(): void {
    this.sesion = {
      activa: false,
      usuario: {},
    };
    localStorage.removeItem('session');
    this.ruta.navigate(['login']);
    this.isAuthenticatedSrc.next(false);
  }

  establecerSesion(sesionActiva: boolean, usuario: Usuario) {
    this.sesion = {
      activa: sesionActiva,
      usuario: usuario,
    };
    localStorage.setItem('session', JSON.stringify(this.sesion));
    this.ruta.navigate(['dashboard']);
  }
}
