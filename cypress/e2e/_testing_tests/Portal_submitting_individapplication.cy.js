import {Login} from "../Page_object/Login.cy" 
const login = new Login();

it('Подача индивидуальной заявки', function(){  
    
    cy
    .viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
    login.loginUser('FS','FS')
    cy
    .wait(10000)
    cy
    .get('[class="username"]')
    .click()
    cy
    .xpath('//*[@id="WT_0x60B893A903726D0D"]/div[2]/ul/li[8]')
    .click()
    cy
    .xpath('//*[@id="WT_0x61E57E003B4A30CC"]/div[2]/div[2]/ul/li[3]/div[2]/div[2]/div[2]/div')
    .click()
    cy
    .contains('Выберите элемент')
    .click()
    cy
    .wait(20000)
    
    const iframe=cy
    .get('[class="wt-x-show-dialog-frame"]') //функция фрейма для взаимодействия с элементами внутри окна
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
    iframe
    .contains('Делегирование')
    .click()
    iframe
    .xpath('//*[@id="button-1042-btnInnerEl"]')
    .click()
    cy
    .wait(10000)
    cy
    .get('.ui-selectmenu-icon')
    .click()
    cy
    .get('[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]')
    .contains('индивидуальная')
    .click()
    cy
    .contains('OK')
    .click()
    .wait(6000)
    cy
    .get('.ui-selectmenu-icon')
    .click()
    cy
    .get('[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]')
    .contains('Собственное желание')
    .click()
    cy
    .contains('OK')
    .click()
    cy
    .get('#ok')
    .click()
})

it('Проверка отображения индивидуальной заявки', function(){  
    
    cy
    .viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
    login.loginUser('UM','UM')
    cy
    .wait(10000)
    cy
    .get('[class="username"]')
    .click()
    cy
    .xpath('//*[@id="WT_0x60B893A903726D0D"]/div[2]/ul/li[8]')
    .click()
    .wait(5000)
    cy
    .contains('Заявки на согласование')
    .click()
    .wait(5000)
    cy
    .get('.wt-lp-witemlist-list > .wt-lp-witemlist-more-container > .wt-lp-witemlist-btn-more')
    .click()
    .wait(3000)
    cy
    .contains('Делегирование')
    .click()
    cy
    .contains('Заявка на включение в состав участников мероприятия (Делегирование)')
    .should('contain','Делегирование')
    .and('be.visible')

})