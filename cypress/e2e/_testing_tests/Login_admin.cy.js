import {Login} from "../Page_object/Login.cy"
const login = new Login();

it('Вход в админку', function(){  
    login.loginAdmin('user1', 'user1')
    cy.url().should('include','/spxml_web/main.htm')
})