import React from 'react';
import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from '@chakra-ui/react';

import { Counter } from 'types/counters';

interface DataTableProps {
  rows: Counter[];
}

export const DataTable: React.FC<DataTableProps> = ({ rows }) => (
  <TableContainer>
    <Table variant="simple">
      <TableCaption>Electricity and gas consuming</TableCaption>
      <Thead>
        <Tr>
          <Th>Electricity</Th>
          <Th>Registered</Th>
          <Th>Payed</Th>
          <Th>Gas</Th>
          <Th>Registered</Th>
          <Th>Payed</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map(row => (
          <Tr key={row.id}>
            <Td isNumeric>{row.lights}</Td>
            <Td>
              {row.lights_registered && (
                <Badge colorScheme="green">Done</Badge>
              )}
            </Td>
            <Td>
              {row.lights_payed && <Badge colorScheme="green">Done</Badge>}
            </Td>
            <Td isNumeric>{row.gas}</Td>
            <Td>
              {row.gas_registered && (
                <Badge colorScheme="green">Done</Badge>
              )}
            </Td>
            <Td>
              {row.gas_payed && <Badge colorScheme="green">Done</Badge>}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
