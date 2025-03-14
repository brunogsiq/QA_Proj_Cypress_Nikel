import { it } from "mocha";
import { telaDeEntrada, visitar } from "../Funcoes/funcoes"
const { faker } = require('@faker-js/faker');


describe('Testes Automatizados - Projeto Nikel', () => 
{
    beforeEach(() => 
    {
        const randonMail = faker.internet.email();
        const randonPass = faker.internet.password();
        visitar()
        telaDeEntrada()   
    });

    context('04 - Validar Cadastro de Entrada de Dados', () => 
    {
        it('04.1 - Validar Acesso a Tela de Entradas e Saídas', () => 
        {
        cy.get(".container-lg") 
            .should("be.visible")    
        })

        it('04.2 - Validar visualização do modal', () => 
        {
            const randonMail = faker.internet.email();
            const randonPass = faker.internet.password();

            cy.get(".bi.bi-plus")
                .click()
            cy.get("#exampleModalLabel")
                .should("be.visible")
                .and("have.text","Adicionar Lançamento") 
        });  

        it('04.03 - Validar Entrada de Dados', () => 
        {
            cy.get(".bi.bi-plus")
                .click()
            cy.get("#value-input")
                .type("2500")
            cy.get("#description-input")
                .type("Salário de Novembro")
            cy.get("#date-input")
                .type("05/11/2023")
            cy.get(".btn.button-default")
                .click()

            cy.on('window:alert', msg =>
            { 
                expect(msg).to.be.equal('Lançamento adicionado com sucesso.')
                expect(msg).contains('Lançamento adicionado com sucesso.')
            })

            cy.reload()

            cy.get(".col-12.col-md-8").eq(0)
                .should("be.visible")
                .and("have.text","Salário de Novembro")
        });
    });
    
    
    context('05 - Validar Cadastro de Saídas de Dados', () => {
        it('Validar Saída de Dados ', () => 
        {
            cy.get(".bi.bi-plus")
                .click()
            cy.get("#value-input")
                .type("230")
            cy.get("#description-input")
                .type("Internet de Novembro")
            cy.get("#date-input")
                .type("07/11/2023")
            cy.get("#inlineRadio2")
                .click()
            cy.get(".btn.button-default")
                .click()

            cy.on('window:alert', msg =>
            { 
                expect(msg).to.be.equal('Lançamento adicionado com sucesso.')
                expect(msg).contains('Lançamento adicionado com sucesso.')
            })

            cy.get(".col-12.col-md-8").eq(1)
                .should("be.visible")
                .and("have.text","Internet de Novembro")
        }) 
    });

    context('06 - Validar Entradas e Saídas', () =>
    {
        cy.get(".bi.bi-plus")
            .click()
        cy.get("#value-input")
            .type("1000")
        cy.get("#description-input")
            .type("Beneficio de Novembro")
        cy.get("#date-input")
            .type("05/11/2023")
        cy.get(".btn.button-default")
            .click()

        cy.get(".col-12.col-md-8").eq(0)
            .should("be.visible")
            .and("have.text","Beneficio de Novembro")

        cy.get("#total")
            .should("have.text","1000")

        cy.get(".bi.bi-plus")
            .click()
        cy.get("#value-input")
            .type("250")
        cy.get("#description-input")
            .type("Internet de Novembro")
        cy.get("#date-input")
            .type("07/11/2023")
        cy.get("#inlineRadio2")
            .click()
        cy.get(".btn.button-default")
            .click()

        
        cy.get(".col-12.col-md-8").eq(1)
            .should("be.visible")
            .and("have.text","Internet de Novembro")

        cy.get("#total")
        .should("have.text","750")
    });
})