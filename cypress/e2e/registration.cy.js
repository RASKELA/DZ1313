describe('Registration Form', () => {
    const random = Math.floor(Math.random() * 10000)
    const testEmail = `user${random}@example.com`
    const password = 'Passw0rd!'

    beforeEach(() => {
        cy.visit('/register')
    })

    it('should show error messages on empty submit', () => {
        cy.get('button[type="submit"]').click()
        cy.contains('Name is required').should('be.visible')
        cy.contains('Last name is required').should('be.visible')
        cy.contains('Email required').should('be.visible')
        cy.contains('Password required').should('be.visible')
        cy.contains('Re-enter password required').should('be.visible')
    })

    it('should register new user successfully', () => {
        cy.get('#name').type('Test')
        cy.get('#lastName').type('User')
        cy.get('#email').type(testEmail)
        cy.get('#password').type(password, { sensitive: true })
        cy.get('#reenterPassword').type(password, { sensitive: true })
        cy.get('button[type="submit"]').click()
        cy.url().should('not.include', '/register')
    })

    it('should login after registration', () => {
        cy.login(testEmail, password)
        cy.url().should('include', '/dashboard') // или другая страница после входа
    })
})