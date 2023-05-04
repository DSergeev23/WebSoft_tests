/// <reference types="cypress">/
/*it('Google_search', function(){  //также можно использовать () => для старта функции
    cy.visit('  https://google.ru')
    cy.get('.gLFyf' ).type('automatisation{Enter}')
    cy.wait(20000)
   // cy.contains('Поиск в Google').click()



})*/
/*describe('Ya.ru main page', () => {
    beforeEach(() => {
      cy.visit('https://ya.ru/')
    })
  
    it('should have the correct page title', () => {
      cy.title().should('eq', 'Яндекс')
    })
  
    it('should have the search form', () => {
      cy.get('form[action="/search"]').should('exist')
    })
  
    it('should have the search input', () => {
      cy.get('input[name="text"]').should('exist')
    })
  
    it('should have the search button', () => {
      cy.get('button[type="submit"]').should('exist')
    })
  
    it('should search for Cypress', () => {
      cy.get('input[name="text"]').type('Cypress')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/search?text=Cypress')
    })
  })*/


  describe('Login form tests', () => {
    beforeEach(() => {
      cy.visit('http://vtb2020.websoft.ru/view_doc.html?mode=default#/');
    });
  
    it('should display error message when no credentials are provided', () => {
      cy.get('#login-form-submit-btn').click();
      cy.get('#login-form-error-message').should('be.visible');
    });
  
    it('should accept valid credentials', () => {
      cy.get('#login-form-username').type('username');
      cy.get('#login-form-password').type('password');
      cy.get('#login-form-submit-btn').click();
      cy.url().should('include', '/dashboard');
    });
  });