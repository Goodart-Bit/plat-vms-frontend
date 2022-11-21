import { Via } from './Misc'
export interface Funcionario {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    viasAsignadas: Via[];
}

export interface AgenteVial {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    idViaAsignada: string;
}