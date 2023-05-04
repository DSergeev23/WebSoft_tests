import {Login} from "../Page_object/Login.cy" //обращение к директории
const login = new Login();

it('Проверка демо', function(){ 
    login.loginAdmin('user1', 'user1')
    cy
    .xpath('/html/body/div/div/div/div[3]/div/div[1]/div[1]/div[1]/div[2]/div[2]')
    .click()
    cy
    .contains('Электронные курсы')
    .click()
    cy
    .xpath('/html/body/div/div/div/div[5]/div/div[9]/div')
    .click()
    cy
    .get('[class=WssListRow]')
    .contains('Навыки аргументации')
    .should('be.visible')
    cy
    .get('[class=WssListRow]')
    .contains('Управление рисками')
    .should('be.visible')
    cy
    .get('[class=WssListRow]')
    .contains('Постановка целей по Smart')
    .should('be.visible')
    
})    