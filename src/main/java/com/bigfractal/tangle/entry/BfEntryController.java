package com.bigfractal.tangle.entry;

import com.bigfractal.tangle.env.BfConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@Transactional
public class BfEntryController implements BfConstants {
    final
    BfEntryRepo entryRepo;

    public BfEntryController(BfEntryRepo entryRepo) {
        this.entryRepo = entryRepo;
    }

    @GetMapping( API_ENTRY_LIST )
    public Collection<BfEntry> doGetEntryList() {
        return entryRepo.findAll();
    }

    @GetMapping( API_ENTRY_BEAN_KEY )
    public ResponseEntity<BfEntry> doGetEntry( @PathVariable String pKey ) {
        Optional<BfEntry> entryOpt = entryRepo.findByKey( pKey );
        return entryOpt.map( response -> ResponseEntity.ok().body( response ))
                       .orElse( ResponseEntity.notFound().build() );
    }

    @PostMapping( API_ENTRY_BEAN )
    public ResponseEntity<BfEntry> doPostEntry( @RequestBody BfEntry pEntry ) throws URISyntaxException {
        BfEntry aSavedEntry = entryRepo.save( pEntry );
        return ResponseEntity
                .created( new URI( API_ENTRY_BEAN + "/key/" + aSavedEntry.getKey() ) )
                .body( aSavedEntry );
    }

    @PutMapping( API_ENTRY_BEAN )
    public ResponseEntity<BfEntry> doPutEntry( @RequestBody BfEntry pEntry ) {
        BfEntry aSavedEntry = entryRepo.save( pEntry );
        return ResponseEntity.ok().body( aSavedEntry );
    }

    @DeleteMapping( API_ENTRY_BEAN_KEY )
    public ResponseEntity<BfEntry> doDeleteEntry( @PathVariable String pKey ) {
        entryRepo.deleteByKey( pKey );
        return ResponseEntity.ok().build();
    }

}
