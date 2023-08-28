import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-detalle-photo',
  templateUrl: './detalle-photo.page.html',
  styleUrls: ['./detalle-photo.page.scss'],
})
export class DetallePhotoPage implements OnInit {

  constructor(private router:Router) {}

  imageSource: any;
  titulo: string='';
  Descripcion: string='';

  ngOnInit() {}

  back(){    this.router.navigate(['./home'])  }

  irHome(){this.router.navigate(['/home'], {
      queryParams: {
        imageSource: this.imageSource,
        titulo: this.titulo,
        Descripcion: this.Descripcion,
      },
    });
  }

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

    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  };

}