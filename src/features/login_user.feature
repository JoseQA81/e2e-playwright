Feature: Login at herokuapp

  Background:
    Given the user is on the herokuapp login page

  Scenario: Login with username and password
    When the user fills username with "joseM@gmail.com"
    And the user fills password with "1231235"
    And the user presses submit button
    Then the user should see contact list


  Scenario Outline: Login with invalid password and empty data
    When the user fills username with "<username>"
    And the user fills password with "<password>"
    And the user presses submit button
    Then the user should see the login error menssage "<errorMessage>"

    Examples:
      | username        | password      | errorMessage                   |
      | joseM@gmail.com | wrongpassword | Incorrect username or password |
      |                 |               | Incorrect username or password |
