import { test } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

test.describe('Registration Form Tests', () => {
    test('Register new user with valid data', async ({ page }) => {
        const registration = new RegistrationPage(page);
        const timestamp = Date.now();
        const email = `user_${timestamp}@test.com`;

        await registration.goto();
        await registration.fillName('John');
        await registration.fillLastName('Doe');
        await registration.fillEmail(email);
        await registration.fillPassword('Test1234!');
        await registration.fillConfirmPassword('Test1234!');
        await registration.clickRegister();
        await registration.expectSuccessfulRegistration();
    });
});