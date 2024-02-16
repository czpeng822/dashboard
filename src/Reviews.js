import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Papa from 'papaparse';


function createData(reviewerID, asin, reviewerName, helpful, reviewText, overall, summary, unixReviewTime, reviewTime) {
  return { reviewerID, asin, reviewerName, helpful, reviewText, overall, summary, unixReviewTime, reviewTime };
}

const rows = [];
Papa.parse('./amazon_appliances_reviews.csv', {
  header: true,
  newline:'\n',
  preview: 10 ,
  dynamicTyping: false,
  complete: function(results) {
      const parsedData = results.data;
      let count = 0;
      parsedData.forEach(row => {
              const rowData = createData(
                row.reviewerID,
                row.asin,
                row.reviewerName,
                row.helpful,
                row.reviewText,
                row.overall,
                row.summary,
                row.unixReviewTime,
                row.reviewTime
            );
            rows.push(rowData);
            count++;
      });
      console.log(rows); 
  }
});

function preventDefault(event) {
  event.preventDefault();
}

export default function Reviews() {
  return (
    <React.Fragment>
      <Title>Appliances Reviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>reviewerID</TableCell>
            <TableCell>asin</TableCell>
            <TableCell>reviewerName</TableCell>
            <TableCell>helpful</TableCell>
            <TableCell>reviewText</TableCell>
            <TableCell>overall</TableCell>
            <TableCell>summary</TableCell>
            <TableCell>unixReviewTime</TableCell>
            <TableCell align="right">reviewTime</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.reviewerID}>
              <TableCell>{row.reviewerID}</TableCell>
              <TableCell>{row.asin}</TableCell>
              <TableCell>{row.reviewerName}</TableCell>
              <TableCell>{row.helpful}</TableCell>
              <TableCell>{row.reviewText}</TableCell>
              <TableCell>{row.overall}</TableCell>
              <TableCell>{row.summary}</TableCell>
              <TableCell>{row.unixReviewTime}</TableCell>
              <TableCell align="right">{row.reviewTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Reviews
      </Link>
    </React.Fragment>
  );
}
								