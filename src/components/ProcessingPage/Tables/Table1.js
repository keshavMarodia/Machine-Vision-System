import './Table.css'

const rows = [
  { id: 1, name: "t1", x: 1, y: 2 },
  { id: 2, name: "t2", x: 23, y: 34 },
];

const Table1 = (props) => {
  return (
    <div>
    <div>Table From Reference image</div>
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
            <td>3</td>
            <td>12</td>
            <td>1</td>
        </tr>
        <tr class="active-row">
            <td>4</td>
            <td>5</td>
            <td>4</td>
        </tr>
    </tbody>
</table>
</div>
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
