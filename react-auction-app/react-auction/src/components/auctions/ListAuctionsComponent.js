import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as classes from './ListAuctions.module.css';
import { Button, Grid } from '@material-ui/core';
import * as service from '../service/AuctionService'
import CarFilter from '../filter/CarFilter';
import TopCars from '../top5/TopCars';


const ListAuctionsComponent = () => {

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        service.getAllAuctions().then(response =>{
            setAuctions(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    },[]);

    // const handleDisplayAuctions = () => {
    //     service.getAllAuctions().then(response =>{
    //         setAuctions(response.data);
    //         console.log(response.data);
    //     }).catch(e => {
    //         console.log(e);
    //     });
    // }

    // const handleSearchStatement = () => {
    //     service.getCars().then(response =>{

    //     })
    // }

    return (
        <div className={classes.Container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <CarFilter />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TopCars />
                    </Grid>
            </Grid>
            
            
        </div>
    );
};

export default ListAuctionsComponent;






// <TableContainer component={Paper}>
//                 <Table  aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Auctions</TableCell>
//                             <TableCell align="right">Name</TableCell>
//                             <TableCell align="right">Description</TableCell>
//                             <TableCell align="right">Start</TableCell>
//                             <TableCell align="right">End</TableCell>
//                             <TableCell align="right">Status</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {auctions.map((auction) => (
//                             <TableRow key={auction.auctionId}>
//                                 <TableCell component="th" scope="row">
//                                     {auction.auctionId}
//                                 </TableCell>
//                                 <TableCell align="right">{auction.auctionName}</TableCell>
//                                 <TableCell align="right">{auction.description}</TableCell>
//                                 <TableCell align="right">{auction.startDate}</TableCell>
//                                 <TableCell align="right">{auction.endDate}</TableCell>
//                                 <TableCell align="right">{auction.auctionStatus}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>