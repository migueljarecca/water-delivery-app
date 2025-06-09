package com.miguel.app.models.dto;

import java.math.BigDecimal;

public class ClientDto {
    
    private String name;
    private String lastName;
    private String phone;
    private String address;

    private String country;
    private String state;
    private String province;
    private String district;
    private String postalCode;

    private BigDecimal latitude;
    private BigDecimal longitude;

    
    public ClientDto() {
    }

    public ClientDto(String name, String lastName, String phone, String address, String country, String state,
            String province, String district, String postalCode, BigDecimal latitude, BigDecimal longitude) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.state = state;
        this.province = province;
        this.district = district;
        this.postalCode = postalCode;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getProvince() {
        return province;
    }
    public void setProvince(String province) {
        this.province = province;
    }
    public String getDistrict() {
        return district;
    }
    public void setDistrict(String district) {
        this.district = district;
    }
    public String getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
    public BigDecimal getLatitude() {
        return latitude;
    }
    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }
    public BigDecimal getLongitude() {
        return longitude;
    }
    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "ClientDto [name=" + name + ", lastName=" + lastName + ", phone=" + phone + ", address=" + address
                + ", country=" + country + ", state=" + state + ", province=" + province + ", district=" + district
                + ", postalCode=" + postalCode + ", latitude=" + latitude + ", longitude=" + longitude + "]";
    }
    
}
