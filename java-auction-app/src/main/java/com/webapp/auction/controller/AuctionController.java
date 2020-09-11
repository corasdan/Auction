package com.webapp.auction.controller;

import com.webapp.auction.dto.CarListingDto;
import com.webapp.auction.model.Auction;
import com.webapp.auction.model.CarListing;
import com.webapp.auction.model.TopCarListings;
import com.webapp.auction.repository.AuctionRepository;
import com.webapp.auction.repository.CarListingRepository;
import com.webapp.auction.repository.TopCarListingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AuctionController {

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private CarListingRepository carListingRepository;


    @GetMapping("/auctions")
    public List<Auction> getAllAuctions(){
        return auctionRepository.findAll();
    }

    @PostMapping("/formPost")
    public CarListing postForm(@RequestBody CarListingDto carListingDto){

        carListingRepository.save(carListingDto.getCarListing());
        return carListingDto.getCarListing();
    }

    @GetMapping(value = "/getAll")
    public List<CarListing> getAll(){
        return carListingRepository.findAll();
    }


    @DeleteMapping(value = "/deleteListing/{postId}")
    public void delete(@PathVariable(name="postId")String title){
        CarListing carListing = carListingRepository.findByTitle(title);
        carListingRepository.delete(carListing);
    }

}
