import { Component, OnInit } from '@angular/core';

import { Contacto } from "./contacto";
import { ContactosService } from "./contactos.service";

@Component({
  // En 'selector' indicamos el elemento HTML en el cuál
  // se instanciará el componente.
  selector: 'my-app',
  // En 'template' indicamos la vista asociada al componente.
  //template: `<h1>Hello {{name}}</h1>`,
  // En 'templateUrl' indicamos la ruta a un template externo.
  templateUrl: "./app/app.component.html"
})
export class AppComponent implements OnInit {

    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Hacemos la inyección de dependencias del servicio. Aprovechamos
    // que TypeScript crea un atributo de aquellos argumentos que tienen
    // modificador de acceso y están tipados.
    constructor(private _contactosService: ContactosService) { }

    private _actualizarListaContactos(): void {
        this._contactosService
            .obtenerContactos()
            .subscribe((contactos: Contacto[]) => this.listaContactos = contactos);
    }

    // El método 'ngOnInit' viene dado por la interfaz 'OnInit', que es el
    // hook en el cual inicializamos los valores del componente.
    ngOnInit(): void {
        this._actualizarListaContactos();
    }

    agregarContacto(contacto: Contacto): void {
        this._contactosService
            .agregarContacto(contacto)
            .subscribe(() => this._actualizarListaContactos());
    }

    eliminarContacto(contacto: Contacto): void {
        // Preguntamos al usuario si está seguro de eliminar al contacto.
        if (confirm(`¿Estás seguro de eliminar a ${contacto.nombre}?`)) {
            // En caso de estar seguro, lo eliminamos.
            this._contactosService
                .eliminarContacto(contacto)
                .subscribe(() => {
                    this.contactoSeleccionado = null;
                    this._actualizarListaContactos();
                });
        }
    }

    verDetallesContacto(contacto: Contacto): void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string): void {
        window.open(ruta, "_blank");
    }
}