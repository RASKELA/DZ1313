Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login')
    cy.get('#email').type(email)
    cy.get('#password').type(password, { sensitive: true })
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length),
        })
    }
    return originalFn(element, text, options)
})
