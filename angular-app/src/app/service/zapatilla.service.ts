import { Injectable } from '@angular/core';
import { Zapatilla } from '../zapatillas/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas : Array<Zapatilla>;
    constructor() {
        this.zapatillas = [new Zapatilla('Adidas', 'Air', 129)
        ,new Zapatilla('Nike', 'Jordan', 300), new Zapatilla('Vans', 'Skater', 80)];
        
    }

    getZapatillas():Array<Zapatilla> {
        return this.zapatillas;
    }
}