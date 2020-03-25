@Smoke
Feature:  Folders and Labels features
   Scenario: Verify default folders
      Given User successfully logins
      Then Validate that user have all default folders 
   Scenario: Verify user can add edit delete folder
      When User click on Folders and Labels
      Then Validate that add folder button is displayed
      When User adds folder
      Then Validate that folder is successfully created.
      When User edit folder
      Then Validate that folder name is successfully edited.
      When User delete folder 
      Then Validate that folder is successfully deleted
   Scenario: Verify cancel add folder
      When User adds folder and cancels
      Then Validate that folder is not successfully created
   Scenario: Verify user can add edit delete label
      When User adds label
      Then Validate that label is successfully created.
      When User edit label
      Then Validate that label is successfully edited.
      When User delete folder 
      Then Validate that label is successfully deleted
   Scenario: Verify cancel add label
      When User adds label and cancels
      Then Validate that label is not successfully created