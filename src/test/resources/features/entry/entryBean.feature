Feature: EntryBean

  Background:
    Given sample entries
      | key | title | author | body |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | love your solitude |
      | yeats-second-coming | The Second Coming | Yeats | Things fall apart |

  Scenario: POST entry
    When client adds entry
      | key | title | author | body |
      | dao-de-jing | Dao De Jing | Lao Tse | The Dao is not the Dao which can be Daoed |
    Then client gets entryList
    And entryList length is 3

  Scenario: GET entry
    When client gets entry with key "rilke-letters-poet"
    Then entry retrieved matches
      | key | title | author | body |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | love your solitude |

  Scenario: PUT entry
    When client gets entry with key "rilke-letters-poet"
    And entry author changed to "Rainer Rilke"
    And client updates entry
    Then client gets entry with key "rilke-letters-poet"
    And entry author is "Rainer Rilke"

  Scenario: DELETE entry
    When client deletes entry with key "rilke-letters-poet"
    Then client gets entryList
    And entryList length is 1