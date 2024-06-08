import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  public confirmAlert(
    title: string,
    confirmButtonText: string,
    denyButtonText: string,
    successMessage: string,
    failedMessage: string
  ): void {
    Swal.fire({
      title,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText,
      denyButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(successMessage, '', 'success');
      } else if (result.isDenied) {
        Swal.fire(failedMessage, '', 'info');
      }
    });
  }
}
