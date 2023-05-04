/*describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    it('Handling new Browser Tab', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/windows/new')
        cy.get('h3')
            .should('have.text', 'New Window')
    })
})*/

import {Login} from "../Page_object/Login_page.cy" 
const login = new Login();
it.only('Открытие курса сотрудником на портале', function(){  
    
    
  login.loginUser('vo','1')
  cy.get(':nth-child(4) > .menu-link').contains("Обучение").click()
  cy.get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text').click()
  cy.contains('Современные ').click()
 /*cy.window().then((win) => {
    cy.spy(win, 'open').as('redirect');
  });*/
  const newUrl = "https://225.websoft-demo.ru/cplayer2/7028192885261758136" 

  cy.window().then(win => {
  cy.stub(win, 'open').as('windowOpen')
  cy.contains('Начать')
  .click()
  cy.get('@windowOpen')
  cy.window().then(win => {
    win.location.href = newUrl;
   // cy.wait(20000)    
    //const doc = Cypress.$("#cp_course_container").contents().find('acc-shadow-el,.acc-button')

   // cy.wrap(doc).click()
    
  })
  //cy.iframe("#cp_course_container").find('#acc-6Xmb5osILI8')   //$("#cp_course_container").contents().find('acc-shadow-el,.acc-button')

  //cy.wrap(doc)
  //.click()
  
//cy.get('[class="container container--fluid fill-height my-0 pa-0"]').iframe('#cp_course_container').xpath('//*[@id="uniqueDomId-1882"]').click()
//cy.frameLoaded ( {  URL : ' http://127.0.0.1/webtutor/ELC_Planning_methods_ORG/index_lms.html ' } ) 

/*cy.getIframeBody('#cp_course_container')
        .then(() => {   
            let iframe1= contentWindow.document.querySelector('#cp_course_container')
        }) */     


  /*cy.get('iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    cy.wrap($body).find('p').type('test')
  })*/

 // cy.document.querySelector('#cp_course_container').contentDocument
// var document=cy.getElementById('#cp_course_container').contentWindow.document



  //const iframe=cy.get('#cp_course_container') //функция фрейма для взаимодействия с элементами внутри окна
    //.contains('0.contentDocument.html')
   // .should('exist')
    //.should('not.empty')
    //.then(cy.wrap)
    //cy.wrap({ foo: null }).its('foo').should('be.null')
    //iframe.xpath('//*[@id="slide-window"]/div/div/div[1]/div/div[4]/div[5]').click()
  
})

/*it('Handling new Browser Window 3 способ', function () {
  login.loginUser('BT','BT')
  cy.get(':nth-child(4) > .menu-link').contains("Обучение").click()
  cy.get('#WT_0x6160005D62231D06 > .wt-lp-button-wrapper > .wt-lp-wbutton-link > .wt-lp-wbutton-btn > .wt-lp-wbutton-text').click()
  cy.contains('Обучение как серьезная деятельность (мобильный)').click()
  cy.window().then((win) => {
      cy.stub(win, 'open', url => {
          win.location.href = 'http://127.0.0.1/cplayer2/7028192885261758102/part?session_id=7163213230882776998&launch_id=bkVxWVxFW0hdXQRLdnRDXk0VQzdFZlp6XVdXYFRXVF9BXxtqTnRf&part_code=i1&lang=ru&tracking_url=%2Fhandler.html'
      }).as("popup")
  })
  cy.contains('Начать')
  .click()
  cy.get('@popup')
      .should("be.called")*/
})
