import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

interface Column {
  key: string;
  label: string;
}

interface Props {
  columns: Column[];
  data: any[];
}

function CustomTable({ columns, data }: Props) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {columns.map(({label}, index) => (
          <TableColumn key={index} className='text-center'>{label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map(({key}, index) => (
              <TableCell key={index} className='text-center'>{row[key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CustomTable;