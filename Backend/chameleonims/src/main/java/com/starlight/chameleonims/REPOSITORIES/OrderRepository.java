package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Order;

public interface OrderRepository extends JpaRepository<Order, String> {

    List<Order> findAllAsc();

}
