import { NextUIProvider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';


interface Props {
  columns: string[];
  data: any[];
}

function TableCustom({ columns, data }: Props) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {columns.map((column, index) => (
          <TableColumn key={index} className='text-center'>{column}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {Object.values(row).map((value, index) => (
              <TableCell key={index} className='text-center'>{value as string}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableCustom;