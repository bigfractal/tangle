Feature: CommentBean

  Background:
    Given sample entries
      | key | title | author | body |
      | rilke-letters-poet | Letters to a Young Poet | Rilke | love your solitude |
      | yeats-second-coming | The Second Coming | Yeats | Things fall apart |
    And sample comments
      | entryKey | author | postDate | body | isRemoved |
      | rilke-letters-poet | lucy | 20240124T2240 | What has god wraught? | false |
      | rilke-letters-poet | cinder | 20240124T2244 | Come here watson | false |
      | rilke-letters-poet | daisy | 20240124T2246 | hello world | false |

  Scenario: GET comment
    When client gets first comment from entry "rilke-letters-poet"
    Then comment retrieved matches
      | entryKey | author | postDate | body | isRemoved |
      | rilke-letters-poet | lucy | 20240124T2240 | What has god wraught? | false |

  Scenario: GET commentList
    When client gets commentList from entry "rilke-letters-poet"
    Then commentList length is 3

  Scenario: POST comment
    When client adds comment
      | entryKey | author | postDate | body | isRemoved |
      | rilke-letters-poet | djembe | 20240124T2248 | Comment #4 | false |
    Then client gets commentList from entry "rilke-letters-poet"
    And commentList length is 4

  Scenario: PUT comment
    When client gets first comment from entry "rilke-letters-poet"
    And comment author changed to "Kiwi"
    And client updates comment
    Then client gets first comment from entry "rilke-letters-poet"
    And comment author is "Kiwi"

  Scenario: DELETE comment
    When client deletes first comment from entry "rilke-letters-poet"
    Then client gets commentList from entry "rilke-letters-poet"
    And commentList length is 2