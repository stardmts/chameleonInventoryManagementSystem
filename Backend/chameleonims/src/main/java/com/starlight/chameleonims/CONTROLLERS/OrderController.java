package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.Order;
import com.starlight.chameleonims.REPOSITORIES.OrderRepository;

@RestController
@RequestMapping("/api/Orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public List<Order> getAllOrders() 
    {
        return orderRepository.findAllByOrderByOrderIdAsc();
    }

    @GetMapping("/{orderId}")
    public Order getAllOrders(@PathVariable String orderId) 
    {
        return orderRepository.findById(orderId).orElse(null);
    }
    
    @DeleteMapping("/Delete/{orderId}")
    public ResponseEntity<?> deleteOrderById(@PathVariable String orderId)
    {
        if (!orderRepository.existsById(orderId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order not found");
        }

        orderRepository.deleteById(orderId);

        return ResponseEntity.ok("Order succesfully deleted");
    }

    @PostMapping("/AddOrder")
    public Order createOrder(@RequestBody Order order) {
           return orderRepository.save(order);
    }

    @PatchMapping("/Update/{orderId}")
    public ResponseEntity<?> updateOrderById(@PathVariable String orderId, @RequestBody Order incomingUpdates)
    {
        Order toUpdate = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));

        if (incomingUpdates.getOrderId() != null) toUpdate.setOrderId(incomingUpdates.getOrderId());
        if (incomingUpdates.getUserEmailAddress() != null) toUpdate.setUserEmailAddress(incomingUpdates.getUserEmailAddress());
        if (incomingUpdates.getStartDate() != null) toUpdate.setStartDate(incomingUpdates.getStartDate());
        if (incomingUpdates.getEndDate() != null) toUpdate.setEndDate(incomingUpdates.getEndDate());
        if (incomingUpdates.getLoanIds() != null) toUpdate.setLoanIds(incomingUpdates.getLoanIds());
        if (incomingUpdates.getStatus() != null) toUpdate.setStatus(incomingUpdates.getStatus());
        
        orderRepository.save(toUpdate);

        return ResponseEntity.ok("Order updated successfully");
    }
    
}