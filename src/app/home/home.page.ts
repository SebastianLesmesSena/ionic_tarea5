import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  receivedImageSource: any;
  receivedTitulo: string = '';
  receivedDescripcion: string = '';
  reciveSelectedRating: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  /*Aca se resiven los parametros */
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.receivedImageSource = params['imageSource'];
      this.receivedTitulo = params['titulo'];
      this.receivedDescripcion = params['Descripcion'];
      this.reciveSelectedRating = params['calificacion']
    });
  }

  /* aca se envian los parametros*/ 
  irDetalle() {this.router.navigate(['/detalle-photo'], {
    queryParams: {
      receivedImageSource: this.receivedImageSource,
      receivedTitulo: this.receivedTitulo,
      receivedDescripcion: this.receivedDescripcion,
      },
    });
  }

  rate(selectedValue: number) {
    this.reciveSelectedRating = selectedValue;
  }
  getStarsArray(rating: number): number[] {
    const starsArray = new Array(Math.max(1, rating));
    console.log('Stars Array:', starsArray);
    return starsArray;
  }

  limpiar(){
    this.receivedImageSource = '';
    this.receivedTitulo = '';
    this.receivedDescripcion = '';
    this.reciveSelectedRating = 0;
  }
  
  irFormulario(){ this.router.navigate(['./formulario']);  }
  salir() {    this.router.navigate(['./login']);  }

}

