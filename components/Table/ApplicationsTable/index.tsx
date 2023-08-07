import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { durationText } from '../../../utils/constants/credit-duration';
import { deadlinesText } from '../../../utils/constants/deadlines';
import { status, statusBg } from '../../../utils/constants/status';

interface Props {
  data: any[];
}

function ApplicationsTable({ data }: Props) {
  const columns = [
    { key: 'created_at', label: 'Fecha de solicitud' },
    { key: 'cedula_cliente', label: 'Número de documento' },
    { key: 'duracion_credito', label: 'Duración del crédito' },
    { key: 'cuotas_credito', label: '¿Cada cuánto se pagará el crédito?' },
    { key: 'valor_credito_total', label: 'Monto solicitado' },
    { key: 'preapobado_form_tiempos', label: 'Estado de la solicitud' },
  ];

  return (
    <>
      <h4 className='text-xl'>Solicitud</h4>
      <Table aria-label="Example static collection table">
        <TableHeader>
          {columns.map(({ label }, index) => (
            <TableColumn key={index} className='text-center'>{label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className={statusBg[row['preapobado_form_tiempos']]}>
              <TableCell key='created_at' className='text-center'>{formatDate(row['created_at'])}</TableCell>
              <TableCell key='cedula_cliente' className='text-center'>{row['cedula_cliente']}</TableCell>
              <TableCell key='duracion_credito' className='text-center'>{durationText[row['duracion_credito']]}</TableCell>
              <TableCell key='cuotas_credito' className='text-center'>{deadlinesText[row['cuotas_credito']]}</TableCell>
              <TableCell key='valor_credito_total' className='text-center'>{row['valor_credito_total']} UYU</TableCell>
              <TableCell key='preapobado_form_tiempos' className='text-center'>{status[row['preapobado_form_tiempos']]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export default ApplicationsTable;