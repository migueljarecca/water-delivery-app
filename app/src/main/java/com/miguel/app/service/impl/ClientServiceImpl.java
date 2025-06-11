package com.miguel.app.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguel.app.exception.ClientAlreadyExistsException;
import com.miguel.app.models.dto.ClientDto;
import com.miguel.app.models.entity.Client;
import com.miguel.app.models.mapper.ClientMapper;
import com.miguel.app.repository.ClientRepository;
import com.miguel.app.service.IClientService;

@Service
public class ClientServiceImpl implements IClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public void createClient(ClientDto clientDto) {

        Client client = ClientMapper.mapToClient(clientDto);

        Optional<Client> optionalClient = clientRepository.findByPhone(client.getPhone());

        if (optionalClient.isPresent()) {
            throw new ClientAlreadyExistsException("Client already registered with given mobileNumber " + client.getPhone());
        }

        clientRepository.save(client);
    }

    @Override
    public ClientDto fetchClient(String mobileNumber) {

        

        throw new UnsupportedOperationException("Unimplemented method 'fetchClient'");
    }

    @Override
    public boolean updateClient(ClientDto clientDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateClient'");
    }

    @Override
    public boolean deleteClient(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteClient'");
    }
    
}
