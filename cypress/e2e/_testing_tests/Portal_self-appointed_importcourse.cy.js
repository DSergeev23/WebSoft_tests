import {Login} from "../Page_object/Login.cy" 
const login = new Login();
beforeEach(function(){
    login.loginUser('BT','BT')
})


    it('Переход на страницу курса', function(){  
    
        cy
        .get(':nth-child(4) > .menu-link')
        .contains("Обучение")
        .click()
        cy
        .get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text')
        .click()
        cy
        .contains('666')
        .click()
        cy
        .contains('Начать')
        .click()
        .wait(10000)
    
    
    
    })
    it('Проверка статуса', function(){  
    
        cy
        .get(':nth-child(4) > .menu-link')
        .contains("Обучение")
        .click()
        cy
        .get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text')
        .click()
        cy
        .contains('666')
        .click()
        cy
        .contains('Статус')
        .should('be.visible')
        cy
        .contains('Назначен')
        .should('be.visible')
    })