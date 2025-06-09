package com.miguel.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguel.app.constants.ClientConstants;
import com.miguel.app.models.dto.ClientDto;
import com.miguel.app.models.dto.ResponseDto;

@RestController
@RequestMapping(path = "/client", produces = (MediaType.APPLICATION_JSON_VALUE))
public class ClientController {
    
    public ResponseEntity<ResponseDto> createClient(@RequestBody ClientDto clientDto) {
        

        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(new ResponseDto(ClientConstants.STATUS_201, ClientConstants.MESSAGE_201));
    }

}
