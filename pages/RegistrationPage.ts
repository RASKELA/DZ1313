import { Page, expect } from '@playwright/test';

export class RegistrationPage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('https://qauto.forstudy.space/register');
    }

    async fillName(name: string) {
        await this.page.getByPlaceholder('Name').fill(name);
    }

    async fillLastName(lastName: string) {
        await this.page.getByPlaceholder('Last name').fill(lastName);
    }

    async fillEmail(email: string) {
        await this.page.getByPlaceholder('Email').fill(email);
    }

    async fillPassword(password: string) {
        await this.page.getByPlaceholder('Password').fill(password);
    }

    async fillConfirmPassword(password: string) {
        await this.page.getByPlaceholder('Confirm password').fill(password);
    }

    async clickRegister() {
        await this.page.getByRole('button', { name: 'Register' }).click();
    }

    async expectSuccessfulRegistration() {
        await expect(this.page).toHaveURL(/garage/);
    }
}
