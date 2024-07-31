import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
  private intervalId: any;
  matricula: string = '';
  alumno: any;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.refreshImageEvery('192.168.43.210', 3000); // Llama a la función cuando el componente se inicializa
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando el componente se destruye
    }
  }

  updateImageSrc(ipAddress: string) {
    const imgElement = document.getElementById('capturedImage') as HTMLImageElement;
    if (imgElement) {
      imgElement.src = `http://${ipAddress}/capture?${new Date().getTime()}`;
    }
  }

  refreshImageEvery(ipAddress: string, interval: number) {
    this.intervalId = setInterval(() => {
      this.updateImageSrc(ipAddress);
    }, interval);
  }

  buscarAlumno() {
    this.alumnoService.getAlumno(this.matricula).subscribe(
      (data) => {
        this.alumno = data;
      },
      (error) => {
        console.error('Error fetching alumno', error);
      }
    );
  }
}
