package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

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

import com.starlight.chameleonims.ENUMS.LoanStatus;
import com.starlight.chameleonims.ENUMS.OrderStatus;
import com.starlight.chameleonims.Loan;
import com.starlight.chameleonims.Order;
import com.starlight.chameleonims.REPOSITORIES.LoanRepository;
import com.starlight.chameleonims.REPOSITORIES.OrderRepository;

@RestController
@RequestMapping("/api/Loans")
@CrossOrigin(origins = "http://localhost:3000")
public class LoanController {

    private final OrderRepository orderRepository;
    private final LoanRepository loanRepository;

    public LoanController(LoanRepository loanRepository, OrderRepository orderRepository) {
        this.loanRepository = loanRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public List<Loan> getAllLoans() 
    {
        return loanRepository.findAllByOrderByLoanIdAsc();
    }

    @GetMapping("/Costume/{costumeId}")
    public List<Loan> getAllLoansByCostumeId(@PathVariable String costumeId) 
    {
        return loanRepository.findAllByCostumeId(costumeId);
    }

    @GetMapping("/{loanId}")
    public Loan getAllLoans(@PathVariable String loanId) 
    {
        return loanRepository.findById(loanId).orElse(null);
    }

    @GetMapping("Order/{orderId}")
    public List<Loan> getAllLoansByOrder(@PathVariable String orderId) 
    {
        return loanRepository.findByOrderId(orderId);
    }
    
    @DeleteMapping("/Delete/{loanId}")
    public ResponseEntity<?> deleteLoanById(@PathVariable String loanId)
    {
        if (!loanRepository.existsById(loanId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Loan not found");
        }

        loanRepository.deleteById(loanId);

        return ResponseEntity.ok("Loan succesfully deleted");
    }

    @PostMapping("/AddLoan")
    public Loan createLoan(@RequestBody Loan loan) 
    {
        return loanRepository.save(loan);
    }

    @PatchMapping("/Update/{loanId}")
    public ResponseEntity<?> updateLoanById(@PathVariable String loanId, @RequestBody Loan incomingUpdates)
    {
        Loan toUpdate = loanRepository.findById(loanId).orElseThrow(() -> new RuntimeException("Loan not found"));

        if (incomingUpdates.getLoanId() != null) toUpdate.setLoanId(incomingUpdates.getLoanId());
        if (incomingUpdates.getOrderId() != null) toUpdate.setOrderId(incomingUpdates.getOrderId());
        if (incomingUpdates.getStartDate() != null) toUpdate.setStartDate(incomingUpdates.getStartDate());
        if (incomingUpdates.getEndDate() != null) toUpdate.setEndDate(incomingUpdates.getEndDate());
        if (incomingUpdates.getCostumeId() != null) toUpdate.setCostumeId(incomingUpdates.getCostumeId());
        if (incomingUpdates.getQuantity() != null) toUpdate.setQuantity(incomingUpdates.getQuantity());
        if (incomingUpdates.getStatus() != null) toUpdate.setStatus(incomingUpdates.getStatus());

        List<Loan> loans = loanRepository.findByOrderId(toUpdate.getOrderId()).stream().filter(loan -> (loan.getOrderId() != null) && (loan.getOrderId().equals(toUpdate.getOrderId()))).toList();

        Long pickedCount = loans.stream().filter(loan -> loan.getStatus() == LoanStatus.PICKED).count();

        Order order = orderRepository.findById(toUpdate.getOrderId()).orElse(null);

        if (order != null ) {
            if (pickedCount == loans.size()) {
                order.setStatus(OrderStatus.PICKED);
                orderRepository.save(order);
                //also send update to WordPress
            }
            else if (pickedCount > 0) {
                order.setStatus(OrderStatus.PICKING_IN_PROGRESS);
                orderRepository.save(order);
                //also send update to WordPress
            }
        }

        if (toUpdate.getQuantity() == 0) {
            loanRepository.delete(toUpdate);
        }
        else if (toUpdate.getStatus().equals(LoanStatus.RETURNED)) { 
            toUpdate.setStatus(LoanStatus.READY_TO_RETURN);
        }

        loanRepository.save(toUpdate);

        return ResponseEntity.ok("Loan updated successfully");
    }
    
}