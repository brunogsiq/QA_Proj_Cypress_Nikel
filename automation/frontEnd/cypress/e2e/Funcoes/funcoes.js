const { faker } = require('@faker-js/faker');

export function visitar()
{
    cy.visit('http://127.0.0.1:5500/ProjetoNikel/nikel/public/')
    cy.get(".text-center.mb-3")
      .should("be.visible") 
      .and("have.css","color","rgb(33, 37, 41)")

    cy.get(".text-login > p")
        .eq(0)
        .should("be.visible") 
        .and("have.text","Organize suas finanças de uma forma fácil.")
}

export function telaDeEntrada()
{
    const randonMail = faker.internet.email();
    const randonPass = faker.internet.password();

    cy.get(".link-default")
        .click()
    cy.waitUntil(() =>
        cy.get(".modal-content"))
    cy.get("#email-create-input") 
        .type(randonMail)
    cy.get("#password-create-input")
        .type(randonPass)
    cy.get(".btn.button-default")
        .click()

    cy.reload()

    cy.get("#email-input")
        .type(randonMail)
    cy.get("#password-input")
        .type(randonPass)
    cy.get(".btn.button-login")
        .click()
    cy.waitUntil(() => 
        cy.get(".container-lg") 
            .should("be.visible")
    )
}
