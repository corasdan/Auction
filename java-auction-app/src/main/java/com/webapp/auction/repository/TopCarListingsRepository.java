package com.webapp.auction.repository;

import com.webapp.auction.model.TopCarListings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopCarListingsRepository extends JpaRepository<TopCarListings, Long> {
}
