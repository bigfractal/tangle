Feature: TagBean

  Background:
    Given sample entries
      | key | title | author | body |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | love your solitude |
      | yeats-second-coming | The Second Coming | Yeats | Things fall apart |
    And sample tags
      | entryKey | tag |
      | rilke-letters-poet | funny |
      | rilke-letters-poet | smart |
      | rilke-letters-poet | lazy |

  Scenario: GET tag
    When client gets first tag from entry "rilke-letters-poet"
    Then tag retrieved matches
      | entryKey | tag |
      | rilke-letters-poet | brilliant |

  Scenario: GET tagList
    When client gets tagList from entry "rilke-letters-poet"
    Then tagList length is 3

  Scenario: POST tag
    When client adds tag
      | entryKey | tag |
      | rilke-letters-poet | wise |
    Then client gets tagList from entry "rilke-letters-poet"
    And tagList length is 4

  Scenario: PUT tag
    When client gets first tag from entry "rilke-letters-poet"
    And tag author changed to "happy"
    And client updates tag
    Then client gets first tag from entry "rilke-letters-poet"
    And tag author is "happy"

  Scenario: DELETE tag
    When client deletes first tag from entry "rilke-letters-poet"
    Then client gets tagList from entry "rilke-letters-poet"
    And tagList length is 2