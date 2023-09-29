package com.sandu.fullstackbackend.exception;



public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could Not find the user with id "+id);
    }
}
