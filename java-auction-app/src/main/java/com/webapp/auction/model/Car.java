package com.webapp.auction.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "car_name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Date price;

    @Column(name = "model")
    private Date model;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getPrice() {
        return price;
    }

    public void setPrice(Date price) {
        this.price = price;
    }

    public Date getModel() {
        return model;
    }

    public void setModel(Date model) {
        this.model = model;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", model=" + model +
                '}';
    }
}
