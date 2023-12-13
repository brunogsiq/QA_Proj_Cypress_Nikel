import { visitar } from "../Funcoes/funcoes"
import "../../support/commands"

describe('Testes Automatizados - Projeto Nikel', () => 
{
    it('01 - Validar acesso a página principal', () => 
    {
        visitar()
    })    

    beforeEach(() => 
    {
        visitar()   
    });

   context('02 - Validar Cadastro', () => {
        it('02.1 - Validar Visualização do Modal.', () => 
        {
            cy.get(".link-default")
                .click()
                            
            cy.get(".modal-title")
                .should("be.visible")
                .and("have.text","Crie sua Conta")
        }) 

        it('02.2 - Validar Fechamento do Modal.', () => 
        {
            cy.get(".link-default")
                .click()
            cy.waitUntil(() =>
                cy.get(".modal-content"))
            cy.get(".btn-close")
                .click()
            cy.waitUntil
            cy.get(".text-center.mb-3")
                .should("be.visible")
            
         

            cy.get(".link-default")
                .click()
            cy.get(".btn.btn-secondary.button-cancel")
                .click()
            cy.waitUntil(() =>
                cy.get(".text-center.mb-3"))
            cy.get(".text-center.mb-3")
                .should("be.visible")
        }) 

        it.only('02.3 - Validar crianção de Conta - Válida', () => 
        {
            cy.get(".link-default")
                .click()
            cy.waitUntil(() =>
                cy.get(".modal-content"))
            cy.get("#email-create-input") 
                .type("myuseerrr@gmail.com")
            cy.get("#password-create-input")
                .type("Senha2023")
            cy.get(".btn.button-default")
                .click()

            cy.on('window:alert', msg =>
            { 
                expect(msg).to.be.equal('Conta criada com sucesso.')
                expect(msg).contains('Conta criada com sucesso.')
            })

            cy.reload()

            cy.get(".modal-content")
                .should("not.be.visible") 
        }) 

        it('02.4 - Validar Criação de Conta - Inválido', () => 
        {
            cy.get(".link-default")
                .click()
            cy.waitUntil(() =>
                cy.get(".modal-content"))
            cy.get("#email-create-input") 
                .type("myuseerrr")
            cy.get(".btn.button-default")
                .click()   
           cy.get(".modal-content")
                .should("be.visible") 
            
            cy.reload()

            cy.get(".link-default")
                .click()
            cy.waitUntil(() =>
                cy.get(".modal-content"))
            cy.get("#password-create-input")
                .type("123abC")
            cy.get(".btn.button-default")
                .click()   
           cy.get(".modal-content")
                .should("be.visible") 
            
            cy.reload()

            cy.get(".link-default")
                .click()
            cy.waitUntil(() =>
                cy.get(".modal-content"))
            cy.get("#email-create-input") 
                .type("myuseerrr")
            cy.get("#password-create-input")
                .type("123abC")
            cy.get(".btn.button-default")
                .click()
           cy.get(".modal-content")
                .should("be.visible") 
        }) 
    });

    context('03 - Validar Login', () => {
        it.only('03.1 - Login Válido', () => 
        {
            cy.login('myuseerrr@gmail.com','Senha2023')
            cy.get(".bi.bi-cash-coin.color-primary.icon-detail")
                .should("be.visible")
        }) 

        it('03.2 - Login Inválido', () => 
        {
            cy.reload()

            cy.get("#email-input")
                .type("myuseerrr")
            cy.get("#password-input")
                .type("123abC")
            cy.get(".btn.button-login")
                .click()

            cy.on('window:alert', msg =>
            { 
                expect(msg).to.be.equal('Ops! Verifique o usuário ou a senha.')
                expect(msg).contains('Ops! Verifique o usuário ou a senha.')
            })

            cy.reload()

            cy.get("#email-input")
                .type("myuseerrr@gmail.com")
            cy.get(".btn.button-login")
                .click()

            cy.on('window:alert', msg =>
            { 
                expect(msg).to.be.equal('Ops! Verifique o usuário ou a senha.')
                expect(msg).contains('Ops! Verifique o usuário ou a senha.')
            }) 
        }) 
    });
})