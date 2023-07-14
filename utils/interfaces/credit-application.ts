// Interface in backend: Form Tiempos
export interface CreditApplicationPayload {
  id?: number;
  tipo_moneda: string;
  valor_credito_total: number;
  tasa_interes: 0;
  cuotas_credito: number;
  duracion_credito: number;
  preapobado_form_tiempos: number;
  estado_externo: number;
  fecha_aprobacion: string | null;
  created_at: string;
  updated_at: string;
  cedula_cliente: string;
  approved_by?: string;
}
