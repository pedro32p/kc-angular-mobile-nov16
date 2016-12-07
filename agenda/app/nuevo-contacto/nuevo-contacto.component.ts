import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Contacto } from "../contacto";
import { ContactosService} from "../contactos.service";

@Component({
    templateUrl: "./app/nuevo-contacto/nuevo-contacto.component.html"
})
export class NuevoContactoComponent { 

//hacemos inyección de dependencia
constructor(private _router: Router, private _contactosService: ContactosService) { }  

    agregarContacto(contacto: Contacto): void {
        this._contactosService
            .agregarContacto(contacto)
            //subscribe tiene 3 manejadores
            .subscribe(
                //todo ha ido bien
                () => this._router.navigate(["/mis-contactos"]),
                
                /*Podriamos utilizar estos 2 manejadores tb (NO NOS HACEN FALTA)
                -Algo ha ido mal
                () => "",
                -Se ejecuta cuando se hace el complete, ha terminado su trabajo
                () => "" */
            );
    }

}
