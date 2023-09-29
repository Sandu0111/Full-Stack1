package com.sandu.fullstackbackend.exception;

public class AdminNotFoundException extends RuntimeException{
    public AdminNotFoundException(Long employee_name){
        super("Could Not find the user with id "+employee_name);
    }
}
