import { Via } from './Via'
export interface Funcionario {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    viasAsignadas: Via[];
}

export interface AgenteVial {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    idViaAsignada: string;
}