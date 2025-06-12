package com.miguel.app.models.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "clients")
public class Client extends BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastName;
    private String mobileNumber;
    private String address;

    private String country;
    private String state;
    private String province;
    private String district;
    private String postalCode;

    @Column(precision = 9, scale = 6)
    private BigDecimal latitude;

    @Column(precision = 9, scale = 6)
    private BigDecimal longitude;

    
    public Client() {
    }

    public Client(Long id, String name, String lastName, String mobileNumber, String address, String country, String state,
            String province, String district, String postalCode, BigDecimal latitude, BigDecimal longitude) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.country = country;
        this.state = state;
        this.province = province;
        this.district = district;
        this.postalCode = postalCode;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
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


    public String getMobileNumber() {
        return mobileNumber;
    }


    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
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
        return "Client [id=" + id + ", name=" + name + ", lastName=" + lastName + ", mobileNumber=" + mobileNumber + ", address="
                + address + ", country=" + country + ", state=" + state + ", province=" + province + ", district="
                + district + ", postalCode=" + postalCode + ", latitude=" + latitude + ", longitude=" + longitude + "]";
    }

}
