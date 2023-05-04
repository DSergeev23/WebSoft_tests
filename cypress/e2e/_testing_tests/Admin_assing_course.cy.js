
import {Login} from "../Page_object/Login.cy" //обращение к директории
const login = new Login();

it('Назначение курса сотруднику', function(){ 
    login.loginAdmin('user1', 'user1')

    cy
    .get('[class=WssListCell]')
    .contains('Белоусова')
    .rightclick()
    cy
    .contains('Назначить электронные курсы')
    .click()
    cy
    .xpath('/html/body/div[2]/div/div[5]/div/img')
    .click()
    cy
    .contains('Навыки аргументации')
    .dblclick() 
    cy
    .contains('Применить')
    .click()
    cy
    .contains('Применить',{ timeout: 10000 })
    .click() 
    cy
    .xpath('/html/body/div[2]/div[2]/div[3]/div')
    .click()
    cy
    .get('[class=WssListCell]')
    .contains('Белоусова')
    .dblclick()
    cy
    .xpath('/html/body/div[2]/div[2]/div[2]/div[2]/div/img')
    .click()
    cy
    .contains('Незаконченные электронные курсы')
    .click()
    cy
    .get('[class=WssListRow]')
    .contains('Навыки аргументации')
    expect(true).to.be.true
      
})
