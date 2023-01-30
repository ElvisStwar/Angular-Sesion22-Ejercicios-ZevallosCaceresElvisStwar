import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Permisos2Guard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let status = localStorage.getItem('status')

      if(status=="logOut"){
        return true;
      } else{
        Swal.fire({
          title: 'Upss :c ...',
          icon: 'info',
          text: 'Debes cerrar sesión',
          confirmButtonText: 'ok',
        })
        return false;
      }
  
      }
  
  
}
