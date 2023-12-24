package com.bigfractal.tangle.entry;

import com.bigfractal.tangle.env.BfConstants;
import com.fasterxml.jackson.core.json.JsonReadFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@Transactional
public class BfEntryController implements BfConstants {
    final
    BfEntryRepo entryRepo;

    final String CONTENT_DIR = "content/entries";

    @PostConstruct
    public void readDataFromDir() throws IOException {
        if ( entryRepo.count() > 0  ) return;

        ObjectMapper objectMapper = new ObjectMapper();
        File aDir = ResourceUtils.getFile( "classpath:" + CONTENT_DIR );
        File[] aFileList = aDir.listFiles();
        if ( aFileList == null ) return;

        for( File aFile : aFileList ) {
            String json = FileUtils.readFileToString( aFile, StandardCharsets.UTF_8 );
            BfEntry entry = objectMapper.readValue( json, BfEntry.class );
            entryRepo.save( entry );
        }
    }

    public BfEntryController(BfEntryRepo entryRepo) {
        this.entryRepo = entryRepo;
    }

    @GetMapping( API_ENTRY_LIST )
    public List<BfEntry> doGetEntryList() {
        return entryRepo.findAll( Sort.by( Sort.Direction.ASC, "key" ) );
    }

    @GetMapping( API_ENTRY_BEAN_KEY )
    public ResponseEntity<BfEntry> doGetEntry( @PathVariable String pKey ) {
        Optional<BfEntry> entryOpt = entryRepo.findByKey( pKey );
        return entryOpt.map( response -> ResponseEntity.ok().body( response ))
                       .orElse( ResponseEntity.notFound().build() );
    }

    @GetMapping( API_PREV_ENTRY_KEY )
    public ResponseEntity<String> doGetPrevEntry( @PathVariable String pKey ) {
        List<BfEntry> aEntryList = doGetEntryList();
        BfEntry prevEntry = null;
        for( BfEntry aNowEntry : aEntryList ) {
            if ( aNowEntry.getKey().equals( pKey ) ) break;
            prevEntry = aNowEntry;
        }

        return ( prevEntry != null ) ?
                ResponseEntity.ok().body( prevEntry.getKey() )
                :
                ResponseEntity.notFound().build();
    }

    @GetMapping( API_NEXT_ENTRY_KEY )
    public ResponseEntity<String> doGetNextEntry( @PathVariable String pKey ) {
        List<BfEntry> aEntryList = doGetEntryList();
        BfEntry nextEntry = null;
        for( int aCount = aEntryList.size() - 1; aCount >= 0; aCount-- ) {
            BfEntry aNowEntry = aEntryList.get( aCount );
            if ( aNowEntry.getKey().equals( pKey ) ) break;
            nextEntry = aNowEntry;
        }

        return ( nextEntry != null ) ?
                ResponseEntity.ok().body( nextEntry.getKey() )
                :
                ResponseEntity.notFound().build();
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
