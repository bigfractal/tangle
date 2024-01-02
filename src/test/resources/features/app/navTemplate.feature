Feature: navTemplate

  Scenario: open website
    When user opens website
    Then page contains element with id "appTitle"
    And page contains element with id "navEpisodes"

  Scenario: about view
    When user clicks link with id "navAbout"
    Then page contains element with id "sectionAbout"

  Scenario: episodes view
    When user clicks link with id "navEpisodes"
    Then element with id "sectionHeader" has text "Episodes"

#  Scenario: signup view
#    When user clicks link with id "navSignup"
#    Then element with id "sectionHeader" has text "Signup"

#  Scenario: login view
#    When user clicks link with id "navLogin"
#    Then element with id "sectionHeader" has text "Login"

  Scenario: home view
    When user clicks link with id "appTitle"
    Then element with id "sectionHeader" has text "Episodes"

