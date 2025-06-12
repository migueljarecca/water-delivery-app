package com.miguel.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/fetch")
    public ResponseEntity<ClientDto> fetchClientDetails(@RequestParam Long id) {

        ClientDto clientDto = iClientService.fetchClient(id);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(clientDto);
    }

    @PutMapping("/update")
    public ResponseEntity<ResponseDto> updateClientDetails(@RequestBody ClientDto ClientDto) {

        boolean isUpdated = iClientService.updateClient(ClientDto);

        if (isUpdated) {
            return ResponseEntity
                .status(HttpStatus.OK)
                .body(new ResponseDto(ClientConstants.STATUS_201, ClientConstants.MESSAGE_201));

        } else {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseDto(ClientConstants.MESSAGE_417_UPDATE, ClientConstants.MESSAGE_417_UPDATE));
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<ResponseDto> deleteClientDetails(@RequestParam Long id) {

        boolean isDeleted = iClientService.deleteClient(id);

        if (isDeleted) {
            return ResponseEntity
                .status(HttpStatus.OK)
                .body(new ResponseDto(ClientConstants.STATUS_201, ClientConstants.MESSAGE_201));

        } else {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseDto(ClientConstants.MESSAGE_417_DELETE, ClientConstants.MESSAGE_417_DELETE));
        }
    }

}


