package com.bigfractal.tangle.env;

public interface BfConstants {

    String LOCALHOST_PREFIX = "http://localhost";

    String API = "/api/v1/";
    String API_ENTRY = API + "entry/";
    String API_ENTRY_BEAN = API_ENTRY + "entryBean";
    String API_ENTRY_BEAN_KEY = API_ENTRY_BEAN + "/key/{pKey}";
    String API_ENTRY_LIST = API_ENTRY + "entryList";
    String API_PREV_ENTRY_KEY = API_ENTRY + "prevEntry/key/{pKey}";
    String API_NEXT_ENTRY_KEY = API_ENTRY + "nextEntry/key/{pKey}";
}
