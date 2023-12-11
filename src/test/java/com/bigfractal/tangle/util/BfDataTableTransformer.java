package com.bigfractal.tangle.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.DefaultDataTableCellTransformer;
import io.cucumber.java.DefaultDataTableEntryTransformer;
import io.cucumber.java.DefaultParameterTransformer;

import java.lang.reflect.Type;

public class BfDataTableTransformer {
    private final ObjectMapper objectMapper;

    public BfDataTableTransformer(ObjectMapper pObjectMapper) {
        objectMapper = pObjectMapper;
    }

    @DefaultParameterTransformer
    @DefaultDataTableEntryTransformer
    @DefaultDataTableCellTransformer
    public Object transformer(Object pFromValue, Type pToValueType) {
        return objectMapper.convertValue(pFromValue,
                objectMapper.constructType(pToValueType));
    }
}
