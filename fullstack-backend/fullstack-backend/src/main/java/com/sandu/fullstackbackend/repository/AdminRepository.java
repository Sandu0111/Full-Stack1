package com.sandu.fullstackbackend.repository;

import com.sandu.fullstackbackend.model.Admin;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import java.util.Optional;

public interface AdminRepository extends JpaRepositoryImplementation<Admin,Long> {

}
