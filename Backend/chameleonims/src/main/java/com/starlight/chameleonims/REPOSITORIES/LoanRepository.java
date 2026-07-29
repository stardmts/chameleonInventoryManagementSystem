package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Loan;

public interface LoanRepository extends JpaRepository<Loan, String> {

}
