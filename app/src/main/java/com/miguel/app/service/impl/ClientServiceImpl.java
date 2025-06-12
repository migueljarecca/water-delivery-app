package com.miguel.app.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguel.app.exception.ClientAlreadyExistsException;
import com.miguel.app.exception.ResourceNotFoundException;
import com.miguel.app.models.dto.ClientDto;
import com.miguel.app.models.entity.Client;
import com.miguel.app.models.mapper.ClientMapper;
import com.miguel.app.repository.ClientRepository;
import com.miguel.app.service.IClientService;

@Service
public class ClientServiceImpl implements IClientService {

    @Autowired
    private ClientRepository clientRepository;

    /**
     * @param clientDto - clientDto Object
     */
    @Override
    public void createClient(ClientDto clientDto) {

        Client client = ClientMapper.mapToClient(clientDto, new Client());

        Optional<Client> optionalClient = clientRepository.findByMobileNumber(client.getMobileNumber());

        if (optionalClient.isPresent()) {
            throw new ClientAlreadyExistsException("Client already registered with given mobileNumber " + client.getMobileNumber());
        }

        clientRepository.save(client);
    }

   /**
    * @param mobileNumber - input mobile number
    * @return Client details based on a given mobileNumber 
    */
    @Override
    public ClientDto fetchClient(Long id) {

        Client client = clientRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("client", "id", id.toString()));

        ClientDto clientDto = ClientMapper.mapToClientDto(client, new ClientDto());    
        return clientDto;
    }

    /**
     * @param ClientDto - ClientDto Object
     * @return boolean indicating if the update of client details is successful or not
     */
    @Override
    public boolean updateClient(ClientDto clientDto) {
        
        boolean isUpdated = false;

        Client existingClient = clientRepository.findById(clientDto.getId())
            .orElseThrow(() -> new ResourceNotFoundException("client", "id", clientDto.getId().toString()));

        Client client = ClientMapper.mapToClient(clientDto, existingClient);
        clientRepository.save(client);
        isUpdated = true;

        return isUpdated;
    }

    /**
    * @param id - input id
    * @return boolean indicating if the delete of Client details is successful or not
    */    
    @Override
    public boolean deleteClient(Long id) {
        
         Client existingClient = clientRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("client", "id", id.toString()));

        clientRepository.deleteById(existingClient.getId());
        return true;    
    }
    
}
