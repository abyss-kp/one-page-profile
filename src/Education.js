import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: "95vw",
    maxWidth: "97vw"
  },
});

function createData(degree, year, board, cgp) {
  return { degree, year, board, cgp };
}


export default function SimpleTable(props) {
  const classes = useStyles();
  let rows = []
  let dist = []
  if (props.data[0]) {
    props.data[0].fields.education.Qualification.map(itm => {
      rows.push(createData(itm.degree, itm.YOP, itm.board, itm.cgpa))
    })
    props.data[0].fields.education.Distinctions.map(itm => {
      dist.push(<li>{itm}</li>)
    })
  }
  return (
    <div id="education">
      <h2>Education</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Board)</TableCell>
              <TableCell align="right">CGP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell >{row.degree}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.board}</TableCell>
                <TableCell align="right">{row.cgp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3>ACADEMIC DISTINCTIONS AND CO-CURRICULAR ACHIEVEMENTS</h3>
      <ul>
        {dist}
      </ul>
    </div>
  )
}