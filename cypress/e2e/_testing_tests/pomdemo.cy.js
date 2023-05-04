
import { LoginPage } from "./page/login_page"
const loginPage = new LoginPage()

describe('Login tests', function () {

    beforeEach(function(){
        cy.visit('https://dev.websoft.ru:37542/default')
    })

    it('Login Test', function () {                     // можно добавлять после it .skip(пропуск теста)  or .only(выполняется один тест)
        
        loginPage.enterUserName('ag')
        loginPage.enterUserPassword('ag')
        loginPage.clickLogin()
        cy.contains('ГеннадийАнисимов').click()
        cy.contains('Выход').click()


        //cy.visit('https://dev.websoft.ru:37542/default')
        //cy.get('#WT_0x5FCF38E602623841 > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
        //cy.get('#WT_0x5FCF37302D4E784C > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
    })

    it('Login Test 2', function () {

        loginPage.enterUserName('ag4')
        loginPage.enterUserPassword('ag5')
        loginPage.clickLogin()
        cy.contains('ГеннадийАнисимов').click()
        cy.contains('Выход').click()

        // cy.visit('https://dev.websoft.ru:37542/default')
        //cy.get('#WT_0x5FCF38E602623841 > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
        //cy.get('#WT_0x5FCF37302D4E784C > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld').type('ag')
    })
})


