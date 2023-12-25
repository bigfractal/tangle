Feature: EntryView

  Background:
    Given sample entries
      | key | title | author | body | postStamp | thumb |
      | yeats-second-coming | The Second Coming | Yeats | Things fall apart | 2023-12-14T6:00:00 | https://m.media-amazon.com/images/I/51q6vHpWfNL._SY445_SX342_.jpg |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | love your solitude | 2023-12-15T6:00:00 | https://m.media-amazon.com/images/I/9147lKQbD8L._SY522_.jpg |
    When user opens website
    And user clicks link with id "navEpisodes"
    Then element with id "sectionHeader" has text "Episodes"

  Scenario: display entry
    When user clicks link with text "Letters to a Young Poet"
    Then view contains header with text "Letters to a Young Poet"
    And view contains text "love your solitude"
    And view contains text "Rilke"

  Scenario: next entry
    When user clicks link with text "Letters to a Young Poet"
    And user clicks link with id "nextEntry"
    Then view contains header with text "The Second Coming"

  Scenario: previous entry
    When user clicks link with text "The Second Coming"
    And user clicks link with id "prevEntry"
    Then view contains header with text "Letters to a Young Poet"

  Scenario: next entry on last
    When user clicks link with text "The Second Coming"
    And user clicks link with id "nextEntry"
    Then element with id "sectionHeader" has text "Episodes"

  Scenario: previous entry on first
    When user clicks link with text "Letters to a Young Poet"
    And user clicks link with id "prevEntry"
    Then element with id "sectionHeader" has text "Episodes"
