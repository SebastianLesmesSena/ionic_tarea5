import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-photo',
  templateUrl: './detalle-photo.page.html',
  styleUrls: ['./detalle-photo.page.scss'],
})
export class DetallePhotoPage implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) {}

  imageSource: any;
  titulo: string='';
  Descripcion: string='';

  /*Aca se resiven los parametros */
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.imageSource = params['receivedImageSource'];
      this.titulo = params['receivedTitulo'];
      this.Descripcion = params['receivedDescripcion'];
    });
  }

  back(){ this.router.navigate(['./home']) }

  irHome(){this.router.navigate(['/home'], 
    {
      queryParams: {
        imageSource: this.imageSource,
        titulo: this.titulo,
        Descripcion: this.Descripcion,
      },
    });
  }

}
