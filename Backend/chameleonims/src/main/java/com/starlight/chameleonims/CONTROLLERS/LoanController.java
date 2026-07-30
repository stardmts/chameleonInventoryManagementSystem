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

import com.starlight.chameleonims.Loan;
import com.starlight.chameleonims.REPOSITORIES.LoanRepository;

@RestController
@RequestMapping("/api/Loans")
@CrossOrigin(origins = "http://localhost:3000")
public class LoanController {

    @Autowired
    private LoanRepository loanRepository;

    @GetMapping
    public List<Loan> getAllLoans() 
    {
        return loanRepository.findAllByOrderByLoanIdAsc();
    }

    @GetMapping("/{loanId}")
    public Loan getAllLoans(@PathVariable String loanId) 
    {
        return loanRepository.findById(loanId).orElse(null);
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
    public Loan createLoan(@RequestBody Loan loan) {
           return loanRepository.save(loan);
    }

    @PatchMapping("/Update/{LoanId}")
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
        
        loanRepository.save(toUpdate);

        return ResponseEntity.ok("Loan updated successfully");
    }
    
}