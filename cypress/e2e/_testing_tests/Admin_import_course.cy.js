import {Login} from "../Page_object/Login.cy" 
const login = new Login();

it('Импорт курса', function(){  
    login.loginAdmin('user1', 'user1')
    cy
    .xpath('/html/body/div/div/div/div[3]/div/div[1]/div[1]/div[1]/div[2]/div[2]')
    .click()
    cy
    .contains('Электронные курсы')
    .click()
    cy
    .xpath('/html/body/div[1]/div/div/div[5]/div/div[9]')
    .click()
    cy
    .xpath('/html/body/div/div/div/div[5]/div/div[5]/div')
    .click()
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]')
    .selectFile('cypress/fixtures/mod_gorlova.zip', { action: 'drag-drop' })
    cy.
    wait(20000)
    cy
    .xpath('/html/body/div[2]/div/div[6]/div[1]')
    .click()
    cy
    .xpath('/html/body/div[2]/div/div[8]/div[1]')
    .click()
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Далее >>')
    .click()
    cy
    .xpath('/html/body/div[2]/div/div[5]/div[3]')
    .contains('Применить')
    .click()
    cy
    .xpath('/html/body/div/div/div/div[5]/div/div[21]/div[1]/div/div[2]/div')
    .contains('66')
    .should('be.visible')
    
})