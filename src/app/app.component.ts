import { Component } from '@angular/core';
import { Empleado } from './models/empleado';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleado[] =[
    {id: 1, nombre: 'Gabriel', pais:'Brasil'},
    {id: 2, nombre: 'Fernanda', pais:'Brasil'},
    {id: 3, nombre: 'Emanuel', pais:'Brasil'},
    {id: 4, nombre: 'Jose', pais:'Brasil'}
  ];

  seleccionarUnEmpleado : Empleado = new Empleado();

  addOrEdit(){
    if(this.seleccionarUnEmpleado.id === 0){
      this.seleccionarUnEmpleado.id = this.empleadoArray.length +1;
      this.empleadoArray.push(this.seleccionarUnEmpleado);
    } 

    this.seleccionarUnEmpleado = new Empleado();

  }

  abrirParaEditar(empleado: Empleado){
    this.seleccionarUnEmpleado = empleado;

  }

  eliminarEmpleado(){
    if(confirm('Estas seguro de querer eliminarlo?')) {
      this.empleadoArray = this.empleadoArray.filter(x => x != this.seleccionarUnEmpleado )
      this.seleccionarUnEmpleado = new Empleado();
    }
  }

}

