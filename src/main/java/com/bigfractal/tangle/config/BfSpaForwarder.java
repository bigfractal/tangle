package com.bigfractal.tangle.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class BfSpaForwarder implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry pRegistry ) {
        pRegistry.addViewController( "{x:^[A-Za-z\\d-_]+}" )
                 .setViewName( "forward:/" );
    }
}
