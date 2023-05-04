/// <reference types="cypress">/


it('file_upload',function(){
cy.visit (' http://127.0.0.1')
cy.get('#WT_0x5FCF38E602623841 > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
cy.get('#WT_0x5FCF37302D4E784C > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
cy.contains('Вход').click()
cy.get(':nth-child(2) > .menu-link').contains("Сервисы").click()
cy.xpath('//*[@id="WT_0x631729F03515608B"]/div[2]/div/div[24]/a').click()
cy.contains('Добавить файл').click()
cy.get('[type=file]')//.attachFile('example.json')


})
