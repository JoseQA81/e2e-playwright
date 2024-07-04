import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from 'playwright/test';



Given('the user is on the herokuapp login page', async function () {
    await this.page.goto(this.URL);
  })

When('the user fills username with {string}', async function (username: string) {
    await this.page.getByPlaceholder('Email').fill(username);
})

When('the user fills password with {string}', async function (password: string) {
    await this.page.getByPlaceholder('Password').fill(password);
  })

When('the user presses submit button', async function () {
    await this.page.getByRole('button', { name: 'Submit' }).click();
})

Then('the user should see contact list', async function () {
    await expect(this.page.getByRole('heading', { name: 'Contact List' })).toBeVisible()
})

Then('the user should see the login error menssage {string}', async function (errorMessage: string) {
    await expect(this.page.locator('#error')).toContainText(errorMessage);
})


