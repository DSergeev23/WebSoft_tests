import {Login} from "../Page_object/Login.cy" //обращение к директории
const login = new Login();

it('Создание и назначение курса сотруднику', function(){  
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
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[1]')
    .type('12')
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[2]')
    .type('test')
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]/div[4]/div/img')
    .click()
    cy
    .xpath('/html/body/div/div/div/div[3]/div/div[1]/div[1]/div[1]/div[1]/div[2]/img',{ timeout: 10000 })
    .click()
    cy
    .get('[class=WssListCell]')
    .contains('Белоусова')
    .rightclick()
    cy
    .contains('Назначить электронные курсы')
    .click()
    cy
    .contains('test')
    .dblclick()
    cy
    .contains('Применить')
    .click()
    cy
    .contains('Применить',{ timeout: 10000 })
    .click()
})
it('Отображение назначенного курса на портале у сотрудника', function(){  
    login.loginUser('BT', 'BT')
    cy
    .get('[class="WTCSS-menu-h menu menu-main"]')
    .contains("Обучение")
    .parent()
    .click()
    cy
    .get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text')
    .click()
    cy
    .contains('test')
    .should('contain','test')
})