package com.miguel.app.models.mapper;

import com.miguel.app.models.dto.ClientDto;
import com.miguel.app.models.entity.Client;

public class ClientMapper {
    
    public static ClientDto mapToClientDto(Client client) {

        ClientDto clientDto = new ClientDto();

        clientDto.setName(client.getName());
        clientDto.setLastName(client.getLastName());
        clientDto.setPhone(client.getPhone());
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
}