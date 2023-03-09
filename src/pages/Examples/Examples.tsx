import * as React from 'react';
import { Button, IconButton, Typography, Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  preke: string,
  kiekis: number,
  kaina: number,
) {
  return { preke, kiekis, kaina };
}

const rows = [
  createData('Pienas', 2, 2.15),
  createData('Sviestas', 1, 0.50),
  createData('Suris', 3, 1.20),
  createData('Kumpis', 1, 5.50),
  createData('Marinuoti agurkeliai', 1, 2.65)
];

const Examples = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button><br></br>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button><br></br>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button><br></br>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button><br></br>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton><hr></hr>
      <Typography variant="body1">
        Erik@import@import@import
      </Typography>
      <Typography variant="body2">
        Erik@import@import@import
      </Typography>
      <Typography variant="subtitle2">
        Erik@import@import@import
      </Typography>
      <Typography color="textSecondary">
        Erik@import@import@import
      </Typography><br></br>
      <Box
        padding={2} /* skaičius kart 8 */
        sx={(theme) => ({
          border: `1px solid ${theme.palette.primary.light}`,
        })}
      >
        Erikas Boxas
      </Box>
      <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pirkiniu Sarasas</TableCell>
            <TableCell align="right">kiekis</TableCell>
            <TableCell align="right">kaina&nbsp;(eu)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.preke}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.preke}
              </TableCell>
              <TableCell align="right">{row.kiekis}</TableCell>
              <TableCell align="right">{row.kaina}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


export default Examples;