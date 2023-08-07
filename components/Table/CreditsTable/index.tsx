import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { status } from '../../../utils/constants/status';

interface Props {
  data: any[];
}

function CreditsTable({ data }: Props) {
  const columns = [
    { key: 'id', label: '#' },
    { key: 'balance', label: 'Balance' },
    { key: 'fecha_inicio', label: 'Fecha de inicio' },
    { key: 'fecha_vencimiento_general', label: 'Fecha de vencimiento' },
    { key: 'descripcion', label: 'Descripción' },
    { key: 'estado', label: 'Estado' },
  ];

  return (
    <>
      <h4 className='text-xl'>Crédito</h4>
      <Table>
        <TableHeader>
          {columns.map(({ label }, index) => (
            <TableColumn key={index} className='text-center'>{label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell key='id' className='text-center'>{row['id']}</TableCell>
              <TableCell key='balance' className='text-center'>{row['pagos_total']} UYU / {row['valor_credito_total']} UYU</TableCell>
              <TableCell key='fecha_inicio' className='text-center'>{formatDate(row['fecha_inicio'])}</TableCell>
              <TableCell key='fecha_vencimiento_general' className='text-center'>{formatDate(row['fecha_vencimiento_general'])}</TableCell>
              <TableCell key='descripcion' className='text-center'>{row['descripcion_adicional']}</TableCell>
              <TableCell key='estado' className='text-center'>{status[row['preapobado_form_tiempos']]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h4 className='text-xl'>Periodos de pago</h4>
    </>
  );
}


function formatDate(date: string) {  
  return new Date(date).toLocaleDateString();
}

export default CreditsTable;