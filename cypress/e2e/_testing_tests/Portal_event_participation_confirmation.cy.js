
import {Login} from "../Page_object/Login.cy" 
const login = new Login();



it('Создание мероприятия', function(){  
    login.loginAdmin('user1', 'user1')
    cy
    .xpath('/html/body/div/div/div/div[3]/div/div[1]/div[1]/div[1]/div[5]/div[2]/img')
    .click()
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Новая запись')
    .click()
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[1]')
    .type('1234')
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[2]')
    .type('test_для_действия_смероприятием')
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/div[22]/input')
    .clear('/html/body/div[2]/div[2]/div[4]/div[1]/div[22]/input')
    .type('30.12.2023')
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Публичное мероприятие')
    .click()
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Открытое мероприятие')
    .click()
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]/div[2]')
    .click()
    cy
    .wait(7000)
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine WssLabelDiv_OverflowEllipsis"]')
    .contains('Настройки')
    .click()
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/div[29]')
    .click()
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Заявка на включение в состав участников мероприятия')
    .click()
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]/div[4]')
    .click()
    .wait(5000)
})

it('Подача индивидуальной заявки', function(){  
    
    cy
    .viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
    login.loginUser('ZO','ZO')
    cy
    .wait(10000)
    cy
    .get(':nth-child(2) > .menu-link')
    .contains("Сервисы")
    .click()
    .wait(5000)
    cy
    .xpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div/div[17]')
    .click()
    cy
    .wait(10000)
    cy
    .get('[class="wt-lp-tab-item wt-lp-has-bg lp-boss-tab lp-boss-tab-1"]')
    .contains('Список')
    .click()
    cy
    .wait(5000)
    cy
    .get('[wt-item-id="2"] > .wt-lp-witemlist-item-wrapper > .wt-lp-witemlist-item-header-wrapper > .wt-lp-witemlist-header')
    .click()
    cy      
    .contains('Подать заявку')
    .click()
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
    login.loginUser('KM','KM')
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
    /*.get('.wt-lp-witemlist-list > .wt-lp-witemlist-more-container > .wt-lp-witemlist-btn-more')
    .click()
    .wait(3000)*/ //кнопка " локатор кнопки далее"
    cy
    .contains('test_для_действия_смероприятием')
    .click()
    cy
    .contains('Согласовать заявку')
    .click()
    cy
    .contains('Сохранить')
    .click()
    .wait(4000)
    
})
it('Подтверждение участия в мероприятии', function(){  
    
    cy
    .viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
    login.loginUser('ZO','ZO')
    cy
    .wait(10000)
    cy
    .get(':nth-child(2) > .menu-link')
    .contains("Сервисы")
    .click()
    .wait(5000)
    cy
    .xpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div/div[17]')
    .click()
    cy
    .wait(10000)
    cy
    .get('[class="wt-lp-tab-item wt-lp-has-bg lp-boss-tab lp-boss-tab-1"]')
    .contains('Список')
    .click()
    cy
    .wait(5000)
    cy
    .get('[wt-item-id="2"] > .wt-lp-witemlist-item-wrapper > .wt-lp-witemlist-item-header-wrapper > .wt-lp-witemlist-header')
    .click()
    cy
    .contains('Подтвердить участие')
    .click()
    cy
    .contains('Участие подтверждено')
    .should('be.visible')
    cy
    .contains('OK')
    .click()

})