package com.bigfractal.tangle.entry;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BfEntryRepo extends JpaRepository<BfEntry,Long> {
    Optional<BfEntry> findByKey( String pKey );

    void deleteByKey( String pKey );
}
