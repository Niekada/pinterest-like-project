import {
    TableRow as MuiTableRow,
    Table,
    TableBody,
    TableCell,
    TableHead,
  } from "@mui/material";
  
  import TableRow from "./TableRow";
  
  interface TableProps {
    data: any[];
    columns: string[];
    children: (rowData: any, column: string) => React.ReactNode;
  }
  
  const EnhancedTable: React.FC<TableProps> = ({ data, columns, children }) => {
    return (
      <Table>
        <TableHead>
          <MuiTableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </MuiTableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} data={row} columns={columns}>
              {children}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
  export default EnhancedTable;

