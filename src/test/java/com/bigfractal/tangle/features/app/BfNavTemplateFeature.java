package com.bigfractal.tangle.features.app;

import com.bigfractal.tangle.env.BfConstants;
import com.bigfractal.tangle.util.BfSelenium;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest( webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT )
public class BfNavTemplateFeature implements BfConstants {

    WebDriver driver() { return BfSelenium.getDriver(); }

    @LocalServerPort
    Integer serverPort;

    @When("user opens website")
    public void userOpensWebsite() {
        driver().get( LOCALHOST_PREFIX + ":" + serverPort );
    }

    @Then("page contains element with id {string}")
    public void pageContainsElementWithId(String pId) {
        assertNotNull( driver().findElement( By.id( pId ) ) );
    }

    @And("page contains link with text {string}")
    public void pageContainsLinkWithText(String pText) {
        assertNotNull( driver().findElement( By.partialLinkText( pText ) ) );
    }

    @When("user clicks link with text {string}")
    public void userClicksLinkWithText(String pText) {
        WebElement element = driver().findElement( By.partialLinkText( pText ) );
        element.click();
    }

    @Then("view contains header with text {string}")
    public void viewContainsHeaderWithText(String pText) {
        String text = driver().findElement( By.tagName( "h1" ) ).getText();
        assertTrue( text.contains( pText ) );
    }

    @When("user clicks link with id {string}")
    public void userClicksLinkWithId(String pId) {
        WebElement element = driver().findElement( By.id( pId ) );
        element.click();
    }
}
