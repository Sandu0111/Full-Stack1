package com.sandu.fullstackbackend.controller;

import com.sandu.fullstackbackend.exception.AdminNotFoundException;
import com.sandu.fullstackbackend.exception.UserNotFoundException;
import com.sandu.fullstackbackend.model.Admin;

import com.sandu.fullstackbackend.model.User;
import com.sandu.fullstackbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;
    @PostMapping("/admin")
    Admin newAdmin(@RequestBody Admin newAdmin){
        return adminRepository.save(newAdmin);
    }
    @GetMapping("/admin")
    List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }

    @GetMapping("/admin/{employee_id}")
    Admin getAdminById(@PathVariable Long employee_id){
        return  adminRepository.findById(employee_id).orElseThrow(()->new AdminNotFoundException(employee_id));
    }


}
