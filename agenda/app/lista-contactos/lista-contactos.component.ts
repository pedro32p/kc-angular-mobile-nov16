import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contacto } from "../contacto";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html",
    styleUrls: ["./app/lista-contactos/lista-contactos.component.css"]
})
export class ListaContactosComponent {

    // Usamos el decorador 'Input' para enlazar datos de entrada.
    @Input() contactos: Contacto[];
    
    //Usamos el decorador 'Output' para notificar datos de salida.
    @Output() contactoSeleccionado: EventEmitter<Contacto> = new EventEmitter();

    sentidoOrdenacion: string = "asc";

    //Usamos 'emit' para notificar eventos a quién quiera escuchar.
    notificarContactoSeleccionado(contacto: Contacto): void {
        this.contactoSeleccionado.emit(contacto);
    }

    cambiarOrden(): void {
        this.sentidoOrdenacion = this.sentidoOrdenacion == "asc" ? "desc" : "asc";
    }
}