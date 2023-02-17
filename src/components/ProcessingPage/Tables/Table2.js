import './Table.css'

const rows = [
  { id: 1, x: 1, y: 2, approval: "yes" },
  { id: 2, x: 23, y: 34, approval: "no" },
];

const Table2 = (props) => {
  return (
    <div>
    <div>Table From Captured image</div>
    <table class="styled-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Abscissa</th>
            <th>Ordinate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>First</td>
            <td>6000</td>
            <td>4000</td>
        </tr>
        <tr class="active-row">
            <td>Second</td>
            <td>5150</td>
            <td>4568</td>
        </tr>
    </tbody>
</table>
</div>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Id</TableCell>
    //         <TableCell align="center">Id</TableCell>
    //         <TableCell align="center">Position X</TableCell>
    //         <TableCell align="center">Position Y</TableCell>
    //         <TableCell align="center">Approval</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           {/* <TableCell component="th" scope="row">
    //             {row.id}
    //           </TableCell> */}
    //           <TableCell align="center">{row.id}</TableCell>
    //           <TableCell align="center">{row.id}</TableCell>
    //           <TableCell align="center">{row.x}</TableCell>
    //           <TableCell align="center">{row.y}</TableCell>
    //           <TableCell align="center">{row.approval}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};
export default Table2;
