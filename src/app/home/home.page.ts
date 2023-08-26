import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageSource: any;
  imageFileName: string = 'Photo';
  imageFileCounter: number = 0;
  title: string ='';

  constructor(private router: Router) {
    this.updateTitle();
  }

  updateTitle() {
    this.title = this.imageFileName +'_'+ this.imageFileCounter;
  }

  irDetalle() {    this.router.navigate(['./detalle-photo']);  }
  salir() {    this.router.navigate(['./login']);  }

  takePicture = async () => {
    try {
      const imagen = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        saveToGallery: true,
      });

      this.imageSource = imagen.dataUrl;
      this.imageFileCounter++; // Incrementa el contador
      this.updateTitle(); // Actualiza el título
      
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  };
}
