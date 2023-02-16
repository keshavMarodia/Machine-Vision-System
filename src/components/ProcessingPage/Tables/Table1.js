import './Table1.css'

const rows = [
  { id: 1, name: "t1", x: 1, y: 2 },
  { id: 2, name: "t2", x: 23, y: 34 },
];

const Table1 = (props) => {
  return (
    <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table 1</td>
            <td>6000</td>
        </tr>
        <tr class="active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr>
    </tbody>
</table>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Id</TableCell>
    //         <TableCell align="center">Name</TableCell>
    //         <TableCell align="center">Position X</TableCell>
    //         <TableCell align="center">Position Y</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.id}
    //           </TableCell>
    //           <TableCell align="center">{row.name}</TableCell>
    //           <TableCell align="center">{row.x}</TableCell>
    //           <TableCell align="center">{row.y}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default Table1;
