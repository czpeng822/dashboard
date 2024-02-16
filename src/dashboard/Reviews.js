import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(reviewerID, asin, reviewerName, helpful, reviewText, overall, summary, unixReviewTime, reviewTime) {
  return { reviewerID, asin, reviewerName, helpful, reviewText, overall, summary, unixReviewTime, reviewTime };
}

const rows = [
  createData(
    'A27HOWZBUBJ8FF',
    970408285,
    'Steve',
    [0, 0],
    'Could have been longer though. well made and every thing is in the right place. just a little short compared to the original.',
    4.0,
    'Good fit',
    1387152000,
    '12 16, 2013'
  ),
  createData(
    'A24HQ894NFSTF5',
    7301113188,
    'Maha Saqfalhait "shopaholic! ;)"',
    [0, 0],
    'I like these containers so much i have ordered another set. The fact that they are flexible makes them really easy to use in the freezer, esp when you are in a hurry and want to get things out of the container quickly. I already own a lot of Tupperware products, and these i like the most. They are the most useful.',
    5.0,
    'I Love the Freezer storage line..',
    1236902400,
    '03 13, 2009'
  ),
  createData(
    'AXE83MK90ZEVZ',
    'B00002N7HY',
    'Strom',
    [0, 0],
    'It works, no fires, etc.  Why not 5 stars?  How can I really give a 50 amp Receptacle 5 stars?  What does a 5 star receptacle even look like?  If you find this has improved your life substantially then give it 5 stars.  For me I plugged in a charger.  I\'m not proud.',
    4.0,
    'expectations achieved.',
    1389052800,
    '01 7, 2014'
  ),
  createData(
    'A2J7X7ZIH2EWB1',
    'B00002NATH',
    '',
    [0, 0],
    'Fast shipping. Works great',
    5.0,
    'Five Stars',
    1405814400,
    '07 20, 2014'
  ),
  createData(
    'AJQFNOFTZ7GOX',
    'B00002NATH',
    'Barthbill',
    [1, 1],
    'What can I say? It is the usual Leviton high quality. Works good, lasts a long time.',
    5.0,
    'good product at a good price.',
    1277164800,
    '06 22, 2010'
  ),
  createData(
    'A3EIP4ZCGM0U67',
    'B00002NATH',
    'Christian Fischer',
    [0, 0],
    'The Leviton was new in the box.  All screws were included.  The packing was  and placed in a box the provided.  Great Deal for this device.',
    5.0,
    'Great Deal and Fast Shipment',
    1378339200,
    '09 5, 2013'
  ),
  createData(
    'A18N8ND2CH5ZZB',
    'B00002NATH',
    'Donn Dorminey',
    [0, 0],
    'When you need one, you need one! But if you can wait a little longer save money and order on line.',
    5.0,
    'Save money',
    1396396800,
    '04 2, 2014'
  ),
  createData(
    'A35U08WK3LZ58G',
    'B00002NATH',
    'jim wells',
    [0, 0],
    'i needed some way to plug in my camper and this fit the bill a little tight but works a',
    5.0,
    'works',
    1381622400,
    '10 13, 2013'
  ),
  createData(
    'A2PMRZGUQQ6V6Q',
    'B00002NATH',
    'John H',
    [3, 3],
    'Receptacle is of good quality and should work fine for supplying "shore power" to your RV.  Since it will be used outdoors, I mounted mine in a weather proof box and cover from Lowe\'s, their stock numbers 49867 and 50943, respectively.  I had to modify the cover to accept the round face of the Leviton 30A. receptacle, as it was designed for a regular 15A. wall receptacle.',
    5.0,
    'Shore Power for your RV',
    1289606400,
    '11 13, 2010'
  ),
  createData(
    'A1BFPCIRWQ3WB9',
    'B00002NATH',
    'John Page',
    [0, 0],
    'The unit was of a high quality and was exactly the way it was described. Could not be any happier',
    5.0,
    'Great service',
    1394928000,
    '03 16, 2014'
  ),
];


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
								