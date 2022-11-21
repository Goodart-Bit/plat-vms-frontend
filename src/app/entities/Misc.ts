export interface Via{
    id?: string;
    nombre: string;
    municipio: string;
    puntoReferencia: number[];
}

export interface Reporte{
    id?: string;
    fecha_ini: string;
    fecha_fin?: string;
    via: string;
    evento: string;
    tipo_cierre?: string;
}

export interface Vms{
    id?: string;
    coordenadas: number[];
    tipo: string;
    idViaAsignada: string;
    estado: string; 
}