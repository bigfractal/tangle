Feature: navTemplate

  Scenario: open website
    When user navigates to "http://localhost:8080"
    Then page contains element with id "appTitle"
    And page contains link with text "Login"

  Scenario: about view
    When user clicks link with text "About"
    Then view contains header with text "About"

  Scenario: episodes view
    When user clicks link with text "Episodes"
    Then view contains header with text "Episodes"

  Scenario: signup view
    When user clicks link with text "Signup"
    Then view contains header with text "Signup"

  Scenario: login view
    When user clicks link with text "Login"
    Then view contains header with text "Login"

  Scenario: home view
    When user clicks link with id "appLogo"
    Then view contains header with text "Welcome"

