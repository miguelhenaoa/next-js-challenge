// Interface in backend: Form Tiempos

export interface CreditApplicationResponsePayload {
  id?: number;
  currencyType: string;
  amount: number;
  deadline: number;
  internalApproved: number;
  externalApproved: number;
  approvalDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
  clientDNI: string;
  tasaInteres: 0;
  plazoMaximo: 1;
}

export interface CreditApplicationRequestPayload {
  id?: number;
  tipo_moneda: string;
  valor_credito_total: number;
  tasa_interes: 0;
  plazos_cuotas: number;
  plazo_maximo: number;
  preapobado_form_tiempos: number;
  estado_externo: number;
  fecha_aprobacion: string | null;
  created_at: string;
  updated_at: string;
  cedula_cliente: string;
  approved_by: string;
}

export class CreditApplicationRequestMapper {
  static toResponse(
    payload: CreditApplicationRequestPayload
  ): CreditApplicationResponsePayload {
    return {
      id: payload.id,
      currencyType: payload.tipo_moneda,
      amount: payload.valor_credito_total,
      deadline: payload.plazos_cuotas,
      internalApproved: payload.preapobado_form_tiempos,
      externalApproved: payload.estado_externo,
      approvalDate: new Date(payload.fecha_aprobacion || ''),
      createdAt: new Date(payload.created_at),
      updatedAt: new Date(payload.updated_at),
      clientDNI: payload.cedula_cliente,
      tasaInteres: 0,
      plazoMaximo: 1
    };
  }

  static toRequest(
    payload: CreditApplicationResponsePayload
  ): CreditApplicationRequestPayload {
    return {
      id: payload.id,
      tipo_moneda: payload.currencyType,
      valor_credito_total: payload.amount,
      plazos_cuotas: payload.deadline,
      preapobado_form_tiempos: payload.internalApproved,
      estado_externo: payload.externalApproved,
      fecha_aprobacion: payload.approvalDate?.toISOString() || null,
      created_at: payload.createdAt.toISOString(),
      updated_at: payload.updatedAt.toISOString(),
      cedula_cliente: payload.clientDNI,
      tasa_interes: 0,
      plazo_maximo: 1,
      approved_by: ''
    };
  }
}
