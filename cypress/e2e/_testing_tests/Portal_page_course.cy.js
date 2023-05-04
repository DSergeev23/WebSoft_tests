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
        .contains('Навыки аргументации')
        .click()
        cy
        .url()
        .should('include','/_wt/7028192885261758136')
        cy
        .get('.wt-lp-wheader-header-text')
        .should('contain','Навыки аргументации')
    
    })
    
    it('Проверка наличия кнопки "начать"', function(){  
    
        
        cy
        .get(':nth-child(4) > .menu-link')
        .contains("Обучение")
        .click()
        cy
        .get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text')
        .click()
        cy
        .contains('Навыки аргументации')
        .click()
        cy
        .contains('Начать')
        .should('be.visible')
        
    
    })

    it('Открытие курса сотрудником на портале', function(){  
    
        cy
        .get(':nth-child(4) > .menu-link')
        .contains("Обучение")
        .click()
        cy
        .get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text')
        .click()
        cy
        .contains('Навыки аргументации')
        .click()
        cy
        .contains('Начать')
        .invoke('removeAttr', 'target')
        .click()
        
    }) 

