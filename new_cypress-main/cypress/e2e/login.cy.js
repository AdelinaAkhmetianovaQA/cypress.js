
describe('Авторизация', function () {
    
  
  it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })

it('Неравильный логин  и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('ger@gmail.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })

it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio11');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })

it('Неравильный логин без собачки и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })
it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
cy.get('#mailForgot').type('adelinaufa@ya.ru');
cy.get('#restoreEmailButton').click();
cy.get('#messageHeader').should('be.visible');
cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })



})
