Feature: User Account set up

Scenario: Account creation and verify successful login access
    Given User launches the application
    When User clicks the Register link
    And User enters the following registration details:
      | First Name | Jane               |
      | Last Name  | Doe                |
      | Address    | 123 Automation Way |
      | City       | Tech City          |
      | State      | Karnataka          |
      | Zip Code   | 560001             |
      | Phone      | 9876543210         |
      | SSN        | 123-456-7890       |
      | User Name  | Test User13         |
      | Password  | TestPass@123       |
    And User clicks Register button
    Then Sucess message should be displayed
    When User logs out of the application
    And User logs in with newly created credentials
    Then Account dashboard should be visible