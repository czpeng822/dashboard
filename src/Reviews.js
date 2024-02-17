import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Papa from 'papaparse';
import files from './amazon_appliances_reviews.csv';

function createData(reviewerID, asin, reviewerName, helpful, reviewText, overall, summary, unixReviewTime, reviewTime) {
  return { reviewerID, asin, reviewerName, helpful, reviewText, overall, summary, unixReviewTime, reviewTime };
}

export default function Reviews() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    Papa.parse(files, {
      header: true,
      download: true,
      preview: 10 ,
      dynamicTyping: true,
      complete: function(results) {
        const parsedData = results.data;
        const rowsData = parsedData.map(row => createData(
          row.reviewerID,
          row.asin,
          row.reviewerName,
          row.helpful,
          row.reviewText,
          row.overall,
          row.summary,
          row.unixReviewTime,
          row.reviewTime
        ));
        setRows(rowsData);
      }
    });
  }, []);

  function preventDefault(event) {
    event.preventDefault();
  }
  
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
          {rows.map((row, index)=> (
            <TableRow key={index}>
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
          ),
          )}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Reviews
      </Link>
    </React.Fragment>
  );
}
