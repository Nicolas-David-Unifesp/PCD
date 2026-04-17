import { Observer } from "./Observer";
import { Subject } from "./Subject";


export class Pcd implements Subject {
    private University: Observer[] = [];
    private name: string;


    constructor(name: string) {
        this.name = name;
    }

    read_humidity(o:Observer, ): void {
        o.update_humidity("Umidade: 60%");
    }

    read_ph(o:Observer): void {
        o.update_ph("pH: 7.0");
    }

    read_pressure(o:Observer): void {
        o.update_pressure("Pressão: 1013 hPa");
    }
    
    read_temperature(o:Observer): void {
        o.update_temperature("Temperatura: 25°C");
    }

    
}


//Vou ter que alterar essa bomba aqui
