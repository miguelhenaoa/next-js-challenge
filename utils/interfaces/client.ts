export interface ClientResponsePayload {
  typeDocument: string;
  dni: string;
  optionalIdentifier: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  city: string;
  address: string;
  zipCode: string;
  email: string;
  callSign: string;
  phone: string;
  workAddress: string;
  frontSideDNI: File[];
  backSideDNI: File[];
  salaryReceipts: File[];
  lastSalaryReceipt: File[];
  publicServicesReceipts: File[];
  createdAt: Date;
  updatedAt: Date;
};

export interface ClientRequestPayload {
  type_document: string;
  number_document: string;
  identificador_opcional: string;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  ciudad: string;
  direccion_residencia: string;
  zipcode: string;
  email: string;
  indicativo_cell: string;
  celular_numero: string;
  address_job: string;
  cc_photo_1er_lado: File;
  cc_photo_2do_lado: File;
  recibos_sueldo: File;
  recibo_ultimo_sueldo: File;
  address_services_photo: File;
  created_at: string;
  updated_at: string;
};

export class ClientMapper {
  static toResponse(payload: ClientRequestPayload): ClientResponsePayload {
    return {
      typeDocument: payload.type_document,
      dni: payload.number_document,
      optionalIdentifier: payload.identificador_opcional,
      firstName: payload.primer_nombre,
      secondName: payload.segundo_nombre,
      firstLastName: payload.primer_apellido,
      secondLastName: payload.segundo_apellido,
      city: payload.ciudad,
      address: payload.direccion_residencia,
      zipCode: payload.zipcode,
      email: payload.email,
      callSign: payload.indicativo_cell,
      phone: payload.celular_numero,
      workAddress: payload.address_job,
      frontSideDNI: [payload.cc_photo_1er_lado],
      backSideDNI: [payload.cc_photo_2do_lado],
      salaryReceipts: [payload.recibos_sueldo],
      lastSalaryReceipt: [payload.recibo_ultimo_sueldo],
      publicServicesReceipts: [payload.address_services_photo],
      createdAt: new Date(payload.created_at),
      updatedAt: new Date(payload.updated_at),
    };
  }

  static toRequest(payload: ClientResponsePayload): ClientRequestPayload {    
    return {
      type_document: payload.typeDocument,
      number_document: payload.dni,
      identificador_opcional: payload.optionalIdentifier,
      primer_nombre: payload.firstName,
      segundo_nombre: payload.secondName,
      primer_apellido: payload.firstLastName,
      segundo_apellido: payload.secondLastName,
      ciudad: payload.city,
      direccion_residencia: payload.address,
      zipcode: payload.zipCode,
      email: payload.email,
      indicativo_cell: payload.callSign,
      celular_numero: payload.phone,
      address_job: payload.workAddress,
      cc_photo_1er_lado: payload.frontSideDNI[0],
      cc_photo_2do_lado: payload.backSideDNI[0],
      recibos_sueldo: payload.salaryReceipts[0],
      recibo_ultimo_sueldo: payload.lastSalaryReceipt[0],
      address_services_photo: payload.publicServicesReceipts[0],
      created_at: payload.createdAt.toISOString(),
      updated_at: payload.updatedAt.toISOString(),
    };
  }
}