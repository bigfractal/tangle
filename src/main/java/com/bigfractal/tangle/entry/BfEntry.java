package com.bigfractal.tangle.entry;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class BfEntry {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    Long id;

    String key;
    String title;
    String author;
    String body;

    public void clearGenerated() {
        id = null;
    }
}
