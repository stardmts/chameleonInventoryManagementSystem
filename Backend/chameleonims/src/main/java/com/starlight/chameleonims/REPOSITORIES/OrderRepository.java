package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Order;

public interface OrderRepository extends JpaRepository<Order, String> {

}
