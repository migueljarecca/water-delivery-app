package com.miguel.app.models.mapper;

import com.miguel.app.models.dto.ClientDto;
import com.miguel.app.models.entity.Client;

public class ClientMapper {
    
    public static ClientDto mapToClientDto(Client client, ClientDto clientDto) {

        clientDto.setId(client.getId());
        clientDto.setName(client.getName());
        clientDto.setLastName(client.getLastName());
        clientDto.setMobileNumber(client.getMobileNumber());
        clientDto.setAddress(client.getAddress());

        clientDto.setCountry(client.getCountry());
        clientDto.setState(client.getState());
        clientDto.setProvince(client.getProvince());
        clientDto.setDistrict(client.getDistrict());
        clientDto.setPostalCode(client.getPostalCode());

        clientDto.setLatitude(client.getLatitude());
        clientDto.setLongitude(client.getLongitude());

        return clientDto;
    }

    public static Client mapToClient(ClientDto clientDto, Client client) {

        client.setName(clientDto.getName());
        client.setLastName(clientDto.getLastName());
        client.setAddress(clientDto.getAddress());
        client.setMobileNumber(clientDto.getMobileNumber());

        client.setCountry(clientDto.getCountry());
        client.setState(clientDto.getState());
        client.setProvince(clientDto.getProvince());
        client.setDistrict(clientDto.getDistrict());
        client.setPostalCode(clientDto.getPostalCode());

        client.setLatitude(clientDto.getLatitude());
        client.setLongitude(clientDto.getLongitude());
        
        return client;
    }
}