package com.miguel.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entity.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
