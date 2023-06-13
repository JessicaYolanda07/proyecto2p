import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Jessica condori';
  textPlaceHolder='Escriba su nombre aquí ...';
  deshabilitado= true;
  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  constructor()
  {
    setInterval(()=>this.deshabilitado = false, 3000)
  }
  getSuma(num: number, num2:number){
    return num+num2;
  }
}

