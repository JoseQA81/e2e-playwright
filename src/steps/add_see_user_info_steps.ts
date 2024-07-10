import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";


Given('the user is logged in on the herokuapp', async function () {
    await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/login');
    await this.page.getByPlaceholder('Email').fill('joseM@gmail.com');
    await this.page.getByPlaceholder('Password').fill('1231235');
    await this.page.getByRole('button', { name: 'Submit' }).click();

})

Given('the user clicks on {string} button', async function (buttonName: string) {
    await this.page.getByRole('button', { name: buttonName }).click();
})

When('the user fills the form with random first name, random last name', async function () {
    const randomNumber:number = Math.round(Math.random() * 99999);
    this.randomName = 'Jose' + randomNumber;
    this.randomLastName = 'Lorca Lorenzo' + randomNumber;
    await this.page.getByPlaceholder('First Name').fill(this.randomName);
    await this.page.getByPlaceholder('Last Name').fill(this.randomLastName);

})

When('the user clicks the submit button', async function () {
    await this.page.getByRole('button', { name: 'Submit' }).click();
})


Then('the user should see the new contact in the contact list', async function () {
    const fullName = this.randomName +" "+ this.randomLastName;
    await expect(this.page.locator('#myTable')).toContainText(fullName);
})


Given('the user clicks the {string} button', async function (buttonName: string) {
    await this.page.getByRole('button', { name: buttonName }).click();
})

Then('the user should see the heading {string}', async function (heading: string) {
    await expect(this.page.getByRole('heading')).toContainText(heading);
})


When('the user clicks on the {string} button', async function (s: string) {
    await this.page.getByRole('button', { name: 'Submit' }).click();
})

When('the user fills the form with empty info, first name "", last name "", address "", city "", postal code "", and country ""', async function () {
    await this.page.getByPlaceholder('First Name').fill('');
    await this.page.getByPlaceholder('Last Name').fill('');
    await this.page.getByPlaceholder('Address 1').fill('');
    await this.page.getByPlaceholder('City').fill('');
    await this.page.getByPlaceholder('Postal Code').fill('');
    await this.page.getByPlaceholder('Country').fill('');
})

When('the user clicks on the submit button', async function () {
    await this.page.getByRole('button', { name: 'Submit' }).click();
})


Then('the user should see {string} message', async function (errorMessage: string) {
    await expect(this.page.locator('#error')).toContainText(errorMessage);
})

