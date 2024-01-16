Feature: EntryView

  Background:
    Given sample entries
      | key | title | author | postStamp | thumb | chapterBody | videoBody | stepsBody |
      | yeats-second-coming | The Second Coming | Yeats | 2023-12-14T6:00:00 | https://m.media-amazon.com/images/I/51q6vHpWfNL._SY445_SX342_.jpg | Things fall apart | yeatsVideo | yeatsSteps |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | 2023-12-15T6:00:00 | https://m.media-amazon.com/images/I/9147lKQbD8L._SY522_.jpg | love your solitude | rilkeVideo | ## rilkeSteps |
#    And add tag for "rilke-letters-poet" named "poetry"
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

  Scenario: switch content tabs
    When user clicks link with text "Letters to a Young Poet"
    Then view contains header with text "Letters to a Young Poet"
    Then user clicks link with text "Video"
    And element with id "videoBody" has text "rilkeVideo"
    Then user clicks link with text "Steps"
    And element with id "stepsBody" has text "rilkeSteps"

  Scenario: markdown body
    When user clicks link with text "Letters to a Young Poet"
    Then view contains header with text "Letters to a Young Poet"
    Then user clicks link with text "Steps"
    And element with id "stepsBody" has text "rilkeSteps"
    And element with id "stepsBody" does not have text "##"

  Scenario: add comment
    When user clicks link with id "addComment"
    Then editor is displayed
    Then user types comment "The rain in spain falls on the quick brown fox"
    Then user clicks link with id "commentSave"
    Then commentList contains "The rain in spain falls on the quick brown fox"

  Scenario: add multiple comments
    When user adds comment "Comment #2"
    And user adds comment "Comment #3"
    Then client gets commentList
    And commentList length is 3

  Scenario: edit comment
    When user adds comment "Comment #4"
    Then user clicks last editButton
    Then row editor is displayed
    Then type comment "Comment #4 - A New Hope"
    Then user clicks last saveButton
    Then commentList contains "A New Hope"

  Scenario: Remove comment
    When user adds comment "Comment #5"
    Then user clicks last removeButton
    Then commentList contains "[Removed]"
    And commentList does not contain "Comment #5"

    Scenario: Restore comment
      When user adds comment "Comment #6"
      Then user clicks last removeButton
      Then commentList contains "[Removed]"
      Then user clicks last restoreButton
      Then commentList contains "Comment #6"

  Scenario: Cancel comment edit
    When user adds comment "Comment #7"
    Then user clicks last editButton
    Then row editor is displayed
    Then type comment "Comment #7 - All hope is lost"
    Then user clicks last cancelButton
    Then commentList does not contain "All hope is lost"

    Scenario: tag in entry
      When user clicks link with text "Letters to a Young Poet"
      Then view contains header with text "Letters to a Young Poet"
      And tagList contains "poetry"






