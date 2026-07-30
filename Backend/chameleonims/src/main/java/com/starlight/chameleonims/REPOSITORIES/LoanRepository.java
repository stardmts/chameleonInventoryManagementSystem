package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Loan;

public interface LoanRepository extends JpaRepository<Loan, String> {

    List<Loan> findAllAsc();

}
