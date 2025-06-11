package com.miguel.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguel.app.constants.ClientConstants;
import com.miguel.app.models.dto.ClientDto;
import com.miguel.app.models.dto.ResponseDto;
import com.miguel.app.service.IClientService;

@RestController
@RequestMapping(path = "/client", produces = (MediaType.APPLICATION_JSON_VALUE))
public class ClientController {

    @Autowired
    private IClientService iClientService;
    
    @PostMapping("/create")
    public ResponseEntity<ResponseDto> createClient(@RequestBody ClientDto clientDto) {
        
        iClientService.createClient(clientDto);

        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(new ResponseDto(ClientConstants.STATUS_201, ClientConstants.MESSAGE_201));
    }

}
