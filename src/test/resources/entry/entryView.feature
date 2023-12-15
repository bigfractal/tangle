Feature: EntryView

  Background:
    Given sample entries
      | key | title | author | body | postStamp |
      | yeats-second-coming | The Second Coming | Yeats | Things fall apart | 2023-12-14T6:00:00 |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | love your solitude | 2023-12-15T6:00:00 |
    When user navigates to "http://localhost:8080"
    And user clicks link with text "Episodes"
    Then view contains header with text "Episodes"

  Scenario: display entry
    When user clicks link with text "Letters to a Young Poet"
    Then view contains header with text "Letters to a Young Poet"
    And view contains text "love your solitude"
    And view contains text "Rilke"

  Scenario: next entry
    When user clicks link with text "Next"
    Then view contains header with text "The Second Coming"

  Scenario: previous entry
    When user clicks link with text "Previous"
    Then view contains header with text "Letters to a Young Poet"

  Scenario: list entries
    When user clicks link with text "Contents"
    Then view contains header with text "Episodes"
