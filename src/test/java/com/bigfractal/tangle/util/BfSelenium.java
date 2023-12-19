package com.bigfractal.tangle.util;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BfSelenium {

    static WebDriver sWebDriver;

    public static WebDriver getDriver() {
        if ( sWebDriver == null ) initDriver();
        return sWebDriver;
    }

    public static void shutdown() {
        if ( sWebDriver != null ) sWebDriver.quit();
        sWebDriver = null;
    }

    public static void initDriver() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions chromeOptions = new ChromeOptions();

        chromeOptions.addArguments("--start-maximized");
        chromeOptions.addArguments("--headless=new");

        sWebDriver = new ChromeDriver( chromeOptions );
    }

}
