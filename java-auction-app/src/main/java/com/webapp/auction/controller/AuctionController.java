package com.webapp.auction.controller;

import com.webapp.auction.model.Auction;
import com.webapp.auction.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AuctionController {

    @Autowired
    private AuctionRepository auctionRepository;

    @GetMapping("/auctions")
    public List<Auction> getAllAuctions(){
        return auctionRepository.findAll();
    }

    @GetMapping("/auctions")
    public List<Auction> getAllAuctions(){
        return auctionRepository.findAll();
    }


}
