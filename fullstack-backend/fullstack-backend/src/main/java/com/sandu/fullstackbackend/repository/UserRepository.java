package com.sandu.fullstackbackend.repository;


import com.sandu.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends JpaRepositoryImplementation<User,Long> {
}

