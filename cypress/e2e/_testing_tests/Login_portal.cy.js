import {Login} from "../Page_object/Login.cy"
const login = new Login();

it('Вход с невалидными данными', () => {
    
    login.loginUser('ag','ag1')
    cy.contains("OK").click()
    cy.url().should('include', '/default')
    

  })

  it('Вход с валидными данными', () => {

    login.loginUser('ag','ag') 
    cy.url().should('include', '/home')
    cy.get('.slider-main-header').eq(1).should('have.text', 'Добро пожаловатьна HR-портал!')

  })