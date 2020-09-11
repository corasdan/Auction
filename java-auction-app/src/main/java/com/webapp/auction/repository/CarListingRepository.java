package com.webapp.auction.repository;

import com.webapp.auction.model.CarListing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarListingRepository extends JpaRepository<CarListing, Long> {

    public CarListing findByTitle(String title);
}
