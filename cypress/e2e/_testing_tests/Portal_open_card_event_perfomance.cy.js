import {Login} from "../Page_object/Login.cy" 
const login = new Login();

it('Проверка открытия мероприятие через представление список', function(){  
    
    cy.viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
    login.loginUser('ag','ag')
    cy.wait(10000)
    cy.get(':nth-child(4) > .menu-link').contains("Обучение").click()
    cy.get('[class="wt-lp-wbutton-text"]').contains('Все мероприятия').click()
    cy.wait(5000)
    cy
    .get('[class="wt-lp-tab-item wt-lp-has-bg lp-boss-tab lp-boss-tab-1"]')
    .contains('Список')
    .click()
    cy
    .wait(5000)
    cy
    .get('[wt-item-id="1"] > .wt-lp-witemlist-item-wrapper > .wt-lp-witemlist-item-header-wrapper > .wt-lp-witemlist-header').click()
    cy
    .xpath('//*[@id="WT_0x60BF6ABB064E1D0E"]/div/div/div[2]/div')
    .contains('Навыки работы с заемщиками')
    .should('be.visible')
})

const dayjs = require("dayjs")
const todaysDate = dayjs().format('DD.MM.YYYY')

it('Создание мероприятия с текущей датой', function(){ 
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
    .type('123')
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[2]')
    .type('test')
    cy
    .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/div[22]/input')
    .type(todaysDate)
    //cy.xpath('/html/body/div[2]/div[2]/div[4]/div[1]/input[5]').type('09:00')
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]/div[2]')
    .click()
    cy
    .wait(7000)
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine WssLabelDiv_OverflowEllipsis"]')
    .contains('Сотрудники')
    .click()
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Выбрать сотрудников')
    .click()
    cy
    .get('[class="WssListCell"]')
    .contains('Белоусова Татьяна Борисовна')
    .dblclick()
    cy
    .get('[class="WssLabelDiv WssLabelDiv_SingleLine"]')
    .contains('Применить')
    .click()
    .wait(5000)
    cy
    .xpath('/html/body/div[2]/div[2]/div[1]/div[4]')
    .click()
    .wait(5000)


})


it('Проверка открытия мероприятие через представление календарь', function(){  
    
    cy.viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
    login.loginUser('BT','BT')
    cy.wait(10000)
    cy.get(':nth-child(4) > .menu-link').contains("Обучение").click()
    cy.get('[class="wt-lp-wbutton-text"]').contains('Все мероприятия').click()
    cy.xpath('//*[@id="WT_0x6126189A59074B53"]/div[1]/div[2]/div/table/tbody/tr/td/div/div/div/table').contains('test').click() // не находит тест в представлении
    cy.wait(7000)
    cy.xpath('//*[@id="WT_0x610419BD307F4338"]/div/div/div[2]/div').contains('test')
    .should('be.visible')
    
})