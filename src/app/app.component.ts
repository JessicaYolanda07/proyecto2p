import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listadoDeEstudiantes:any[]=[
    {nombre:'Jessica Condori', estado:'promocionado'},
    {nombre:'Juan Perez', estado:'Regular'},
    {nombre:'Ana Chavez', estado:'Regular'},
    {nombre:'Gabriel Chavez', estado:'recursante'},
  ]
  
  mostrar:boolean=true;
  mostrarNoMostrar()
  {
    this.mostrar=!this.mostrar;
  }
  
  /* nombre = 'Jessica condori';
  textPlaceHolder='Escriba su nombre aquí ...';
  deshabilitado= true;
  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  texto = "Este es un ejemplo de event bindi"
  texto2:string = "";
  constructor()
  {
    setInterval(()=>this.deshabilitado = false, 3000)
  }
  getSuma(num: number, num2:number){
    return num+num2;
  }
   cambiarTexto():void{
    this.texto = "El texto cambio" 
   }*/
}

