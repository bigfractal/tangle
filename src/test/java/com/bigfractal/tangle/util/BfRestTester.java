package com.bigfractal.tangle.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

@Service
public class BfRestTester<T> {
    public T doGet( WebTestClient pClient, Class<T> pClass, String pUrl, String pKey ) {
        return pClient
                .get()
                .uri( pUrl, pKey )
                .header( HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE )
                .accept( MediaType.APPLICATION_JSON )
                .exchange()
                .expectStatus().isOk()
                .expectBody( pClass ) // TODO: yuck
                .returnResult()
                .getResponseBody();
    }

    public List<T> doGetList( WebTestClient pClient, Class<T> pClass, String pUrl ) {
        return pClient
                .get()
                .uri( pUrl )
                .header( HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE )
                .accept( MediaType.APPLICATION_JSON )
                .exchange()
                .expectStatus().isOk()
                .expectBodyList( pClass ) // TODO: yuck
                .returnResult()
                .getResponseBody();
    }

    public T doPost( WebTestClient pClient, Class<T> pClass, String pUrl, Object pObject ) {
         return pClient
                .post()
                .uri( pUrl )
                .bodyValue( pObject )
                .header( HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE )
                .accept( MediaType.APPLICATION_JSON )
                .exchange()
                .expectStatus().isCreated()
                .expectBody( pClass )
                .returnResult()
                .getResponseBody();
    }

    public T doPut( WebTestClient pClient, Class<T> pClass, String pUrl, T pObject ) {
        return pClient
            .put()
            .uri( pUrl )
            .bodyValue( pObject )
            .header( HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE )
            .accept( MediaType.APPLICATION_JSON )
            .exchange()
            .expectStatus().isOk()
            .expectBody( pClass )
            .returnResult()
            .getResponseBody();
    }

    public void doDelete( WebTestClient pClient, String pUrl, String pKey ) {
        pClient
            .delete()
            .uri( pUrl, pKey )
            .header( HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE )
            .accept( MediaType.APPLICATION_JSON )
            .exchange()
            .expectStatus().isOk();
    }
}
