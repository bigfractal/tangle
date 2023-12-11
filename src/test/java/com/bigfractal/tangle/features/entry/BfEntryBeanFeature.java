package com.bigfractal.tangle.features.entry;

import com.bigfractal.tangle.entry.BfEntry;
import com.bigfractal.tangle.entry.BfEntryRepo;
import com.bigfractal.tangle.env.BfConstants;
import com.bigfractal.tangle.util.BfRestTester;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest( webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT )
@CucumberContextConfiguration
public class BfEntryBeanFeature implements BfConstants {
    @Autowired
    BfEntryRepo entryRepo;

    @Autowired
    BfRestTester<BfEntry> restTester;

    @Autowired
    WebTestClient webTestClient;

    BfEntry entry;
    List entryList;

    @Given("^sample entries$")
    public void sampleEntries(DataTable pDataTable) {
        entryRepo.deleteAllInBatch();
        entryRepo.saveAll( pDataTable.asList( BfEntry.class ) );
    }

    @When("^client adds entry$")
    public void clientAddsEntry(DataTable pDataTable) {
        List<BfEntry> dataListToAdd = pDataTable.asList( BfEntry.class );
        assertFalse( dataListToAdd.isEmpty() );
        BfEntry entryToAdd = dataListToAdd.get( 0 );
        assertNotNull( entryToAdd );
        BfEntry entryNew = restTester.doPost( webTestClient, BfEntry.class, API_ENTRY_BEAN, entryToAdd );
        assertNotEquals( entryNew.getId(), entryToAdd.getId() );
    }

    @Then("^client gets entryList$")
    public void clientGetsEntryList() {
        entryList = restTester.doGetList( webTestClient, BfEntry.class, API_ENTRY_LIST );
        assertFalse( entryList.isEmpty() );
    }

    @And("^entryList length is (\\d+)$")
    public void entrylistLengthIs(int pLength) {
        assertNotNull( entryList );
        assertEquals( entryList.size(), pLength );
    }

    @When("^client gets entry with key \"([^\"]*)\"$")
    public void clientGetsEntryWithKey(String pKey) throws Throwable {
        entry = restTester.doGet( webTestClient, BfEntry.class, API_ENTRY_BEAN_KEY, pKey );
        assertNotNull( entry );
    }

    @Then("^entry retrieved matches$")
    public void entryRetrievedMatches(DataTable pDataTable) {
        List<BfEntry> dataListToMatch = pDataTable.asList( BfEntry.class );
        assertFalse( dataListToMatch.isEmpty() );
        BfEntry entryToMatch = dataListToMatch.get( 0 );
        assertNotNull( entryToMatch );
        entry.clearGenerated();
        assertEquals( entryToMatch, entry );
    }

    @And("^entry author changed to \"([^\"]*)\"$")
    public void entryAuthorChangedTo(String pValue) throws Throwable {
        entry.setAuthor( pValue );
    }

    @And("^client updates entry$")
    public void clientUpdatesEntry() {
        entry = restTester.doPut( webTestClient, BfEntry.class, API_ENTRY_BEAN, entry );
    }

    @And("^entry author is \"([^\"]*)\"$")
    public void entryAuthorIs(String pValue) throws Throwable {
        assertEquals( entry.getAuthor(), pValue );
    }

    @When("^client deletes entry with key \"([^\"]*)\"$")
    public void clientDeletesEntryWithKey(String pKey) throws Throwable {
        restTester.doDelete( webTestClient, API_ENTRY_BEAN_KEY, pKey );
    }
}
