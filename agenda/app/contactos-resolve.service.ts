import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve} from "@angular/router";
import { Contacto } from "./contacto";
import { Observable } from "rxjs/Observable";
import { ContactosService } from "./contactos.service";
@Injectable()
export class ContactosResolve implements Resolve<Contacto>  {

    constructor(private _contactosService: ContactosService) { }

    resolve(ruta: ActivatedRouteSnapshot): Observable<Contacto[]> {

        return this._contactosService.obtenerContactos();
    }

}