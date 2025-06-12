package com.miguel.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entity.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    @Query("SELECT c FROM Client c WHERE c.mobileNumber = :mobileNumber")
    Optional<Client> findByMobileNumber (@Param("mobileNumber") String mobileNumber );

}
