package com.miguel.app.service;

import com.miguel.app.models.dto.ClientDto;

public interface IClientService {
    
    /**
     * @param clientDto - clientDto object
     */
    void createClient(ClientDto clientDto);

    /**
     * @param id - input id
     * @return Client details based on a given mobileNumber
     */
    ClientDto fetchClient(String mobileNumber);

    /**
     * @param clientDto - clientDto object
     * @return boolean indicating if the update of client details if successful or not
     */
    boolean updateClient(ClientDto clientDto);

    /**
     * @param id - input id
     * @return boolean indicating if the delete of Account details is successful or not
     */
    boolean deleteClient(Long id);

}
