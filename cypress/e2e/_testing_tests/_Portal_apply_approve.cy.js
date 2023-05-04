import {Login} from "../Page_object/Login.cy" 
const login = new Login();

it('Подача заявки', function(){  
    login.loginUser('BT','BT')
    cy
    .contains('ТатьянаБелоусова')
    .click()
    cy
    .xpath('//*[@id="WT_0x60B893A903726D0D"]/div[2]/ul/li[8]')
    .click()
    cy
    .get('[wt-item-id="2"] > .wt-lp-witemlist-item-wrapper > .wt-lp-witemlist-item-info-wrapper > .wt-lp-witemlist-controls > .wt-lp-witemlist-btn-container > .wt-lp-witemlist-link > .wt-lp-witemlist-btn-outer')
    .click()
    cy
    .contains('Выберите элемент')
    .click()
    cy
    .wait(20000)

    const iframe=cy.get('[class="wt-x-show-dialog-frame"]') //функция фрейма для взаимодействия с элементами внутри окна
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

    iframe
    .contains('Инициатива и ответственность')
    .click()
    iframe
    .xpath('//*[@id="ext-element-20"]')
    .click()
    .wait(10000)
    cy
    .xpath('//*[@id="wt-body"]/div[8]/div[3]/div/button[1]')
    .click()
    .wait(7000)
    cy
    .get('[class="wt-lp-dialog-btn wt-lp-dialog-ok ui-button ui-corner-all ui-widget"]')
    .click() 
    cy
    .xpath('//*[@id="ok"]')
    .click()
    

})
it('Согласование заявки', function(){  //учитывается условие с исправленным ДО
    login.loginUser('KM','KM')
    cy
    .contains('МаксимКедров')
    .click()
    cy
    .xpath('//*[@id="WT_0x60B893A903726D0D"]/div[2]/ul/li[8]/a')
    .click()
    cy
    .xpath('//*[@id="WT_0x6048CAA95BCD401D"]/div[5]/div[2]/ul[1]/li[2]')
    .click()
    cy
    .contains('Заявка на активацию электронного курса Инициатива и ответственность')
    .click()
    cy
    .contains('Согласовать заявку')
    .click()
    .wait(3000)
    cy
    .contains('Сохранить')
    .click()
    .wait(3000)
    

})
it('Проверка согласованной заявки',function(){
    login.loginUser('BT','BT')
    cy
    .contains('ТатьянаБелоусова')
    .click()
    cy
    .contains('Инициатива и ответственность')
    .should('be.visible')

    

})
