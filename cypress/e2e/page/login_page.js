import { isEmpty } from "cypress/types/lodash"

export class LoginPage{
   
    username = '#WT_0x5FCF38E602623841 > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld'
    password = '#WT_0x5FCF37302D4E784C > .wt-lp-wfld-root > .wt-lp-wfld-block > .wt-lp-wfld-container > .wt-lp-wfld-wrapper > .wt-lp-wfld-fld'
    login_button = 'Вход'

    enterUserName(username){
        cy.get(this.username).type(username)
    
    }
    enterUserPassword(password){
        cy.get(this.password).type(password)
    
    }
    clickLogin(){
        cy.contains(this.login_button).click()
    }
}


