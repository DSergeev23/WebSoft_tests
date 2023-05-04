import {Login} from "../Page_object/Login.cy" 
const login = new Login();

it('Создание курса', function(){  
    login.loginAdmin('user1', 'user1')
    cy
    .xpath('/html/body/div/div/div/div[3]/div/div[1]/div[1]/div[1]/div[2]/div[2]')
    .click()
    cy
    .contains('Электронные курсы')
    .click()
    cy
    .contains('Новая запись')
    .click()
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[2]')
    .type('WebHR')
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[1]')
    .type('16')
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]/div[4]/div/img')
    .click()
    cy
    .contains('WebHR')
    .should('contain','WebHR')

})