Feature: Add user info at herokuapp

   Background:
    Given the user is logged in on the herokuapp

Scenario: Login with username and password
    When the user fills username with "joseM@gmail.com"
    And the user fills password with "1231235"
    And the user presses submit button
    Then the user should see contact list

@addUser
Scenario: Add user information

    Given the user clicks on "Add a New Contact" button
    When the user fills the form with first name "Antonia", last name "González Reverte", address "Calle Prueba4, 10", city "Murcia", postal code "553322", and country "España"
    And the user clicks on "Submit" button
    Then the user should see "Antonia González Reverte" in the contact list


  @addUser
  Scenario: Add user information with empty fields

    Given the user clicks the "Add a New Contact" button
    Then the user should see the heading "Add Contact"
    When the user fills the form with empty info, first name "", last name "", address "", city "", postal code "", and country ""
    And the user clicks on the "Submit" button
    Then the user should see "Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required." message