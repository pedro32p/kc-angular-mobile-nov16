import { Injectable } from "@angular/core";

// Para que una clase se comporte como un servicio es necesario decorarla con 'Injectable'.
@Injectable()
export class ContactosService {

    private _contactos: string[] = [
        "Tim Cook",
        "Bill Gates",
        "Elon Musk"
    ];

    obtenerContactos(): string[] {
        return this._contactos;
    }

    agregarContacto(contacto: string): void {
        this._contactos.push(contacto);
    }

    eliminarContacto(contacto: string): void {
        this._contactos = this._contactos
                              .filter((c: string) => c !== contacto);
    }
}