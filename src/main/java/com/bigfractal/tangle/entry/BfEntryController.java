package com.bigfractal.tangle.entry;

import com.bigfractal.tangle.env.BfConstants;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.util.*;

import static java.util.stream.Collectors.toList;

@RestController
@Transactional
public class BfEntryController implements BfConstants {
    final
    BfEntryRepo entryRepo;

    final String CONTENT_DIR = "content/entries";

    @Autowired
    ResourceLoader resourceLoader;

    @PostConstruct
    public void readDataFromDir() throws IOException {
        if ( entryRepo.count() > 0  ) return;

        ObjectMapper objectMapper = new ObjectMapper();

        Resource[] resources = ResourcePatternUtils
                .getResourcePatternResolver(resourceLoader)
                .getResources("classpath*:content/entries/*.json" );

        List<String> aFileList = Arrays.stream(resources)
                .map( Resource::getFilename )
                .sorted()
                .toList();

        for( String aSpec : aFileList ) {
            ClassPathResource classPathResource = new ClassPathResource( CONTENT_DIR + "/" + aSpec );
            byte[] data = FileCopyUtils.copyToByteArray(classPathResource.getInputStream());
            String json = new String(data, StandardCharsets.UTF_8);
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

    @GetMapping( API_RECENT_ENTRY_LIST )
    public List<BfEntry> doGetRecentEntryList() {
        Pageable pageRequest = PageRequest.of( 0, 5, Sort.Direction.DESC, "postStamp" );
        Page<BfEntry> page = entryRepo.findAll( pageRequest );
        return page.toList();
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
