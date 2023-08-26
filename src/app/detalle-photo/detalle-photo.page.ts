import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-photo',
  templateUrl: './detalle-photo.page.html',
  styleUrls: ['./detalle-photo.page.scss'],
})
export class DetallePhotoPage implements OnInit {

  constructor(private router:Router) {}

  back(){
    this.router.navigate(['./home'])
  }

  ngOnInit() {
  }

}
