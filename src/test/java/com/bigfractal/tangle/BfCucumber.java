package com.bigfractal.tangle;

import org.junit.platform.suite.api.IncludeEngines;
import org.junit.platform.suite.api.SelectClasspathResource;
import org.junit.platform.suite.api.Suite;

@IncludeEngines( "cucumber" )
@SelectClasspathResource( "features" )
public class BfCucumber {
}
