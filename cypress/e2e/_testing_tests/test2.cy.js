

it('Google_search', function(){ 
    cy.visit('  https://dev.websoft.ru:37542/default')
    cy.get('#WT_0x5FCF38E602623841 > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
    cy.get('#WT_0x5FCF37302D4E784C > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
    cy.contains('Вход').click()
    cy.get('ul > :nth-child(1) > .menu-link > span').click()
    cy.get('#WT_0x63234B307175584D > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text')
    .should('contain','Все дни рождения')
    .and('have.class', 'wt-lp-wbutton-text')
    .and('be.visible')

    expect(true).to.be.true
    //expect(true).to.be.tru 
    //let name = 'cypress';
    //expect(name).to.be.equal('cypress')- функция позволяющая удостовериться что есть такой текст на кнопке(также expect.to.not.equal, expect.to.be.null)
    assert.equal(4,4, 'NOT EQUAL')
    //assert.strictEqual(4,'4', 'NOT EQUAL') //выполняется строгое неравенство при 4 записанной как строка

})