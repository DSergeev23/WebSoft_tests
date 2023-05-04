/// <reference types="cypress">/
it('Google_search', function(){  //также можно использовать () => для старта функции
    cy.visit('  http://127.0.0.1:80')
    cy.get('#WT_0x5FCF38E602623841 > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
    cy.get('#WT_0x5FCF37302D4E784C > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
    cy.contains('Вход').click()
    cy.get('.username > a')
    .should('contain','Геннадий')
   

})