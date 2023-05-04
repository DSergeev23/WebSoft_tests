export class MainCommands {

    clickMenu(item) {
      cy
      .get('[class="WTCSS-menu-h menu menu-main"]')
      .contains(item)
      .parent()
      .click()

      return this;
    }
    findHeader(header, id) {
      cy
      .get('[id^=' + id + ']')
      .should('contain', header)

      return this;
    }
    checkUrl(url) {
      cy
      .url()
      .should('include', url)

      return this;
    }
    check2WaysHeader(container, text, header) {
      cy
      .get(container)
      .invoke(text)
      .should('match', header) //в условии содержится выбор в зависимости от роли сотрудника выводится текст в разделе Кабинет руководителя/Мои коллеги

      return this;
    }
    openServicesWidget(id, item) {
      cy
      .get('[id^=' + id + ']')
      .contains(item)
      .siblings('[wt-role="link"]')
      .click()

      return this;
    }
    openPersonalArea(user) {
      cy
      .contains(user)
      .click()
      .url()
      .should('include', '/cabinet')

      return this;
    }
    openPersonalAreaTab(id, item, url) {
      cy
      .get('[id^=' + id + ']')
      .contains(item)
      .siblings('[wt-role="link"]')
      .click()
      .url()
      .should('include', url)

      return this;
    }
    clickButtonWindow(buttontext) {
      cy
      .contains(buttontext)
      .click()

      return this;
    }
    checkWindowText(window, text) {
      cy
      .get(window)
      .should('contain', text)

      return this;
    }
    clickButtonHeader(id, item) {
      cy
      .get('[id^=' + id + ']')
      .contains(item)
      .click()

      return this;
    }
    checkObjectCardInWidget(header, id) {
      cy
      .get('[id^=' + id + ']')
      .contains(header)
      .should('be.visible')

      return this;
    }
    openWidgetLearningModule(item) {
      cy
      .get('.wt-lp-wbutton-link')
      .contains(item)
      .parent()
      .click()

      return this;
    }
    typeInSearchField(id, typetext) {
      cy
      .get('[id^=' + id + ']')
      .get('[wt-role="search-fld"]')
      .type(typetext + '{enter}').should('have.value', typetext)

      return this;
    }
    checkSearchResult(objectnametrue, objectnamefalse) {
      cy
      .contains(objectnametrue).should('be.visible')
      cy
      .contains(objectnamefalse).should('not.exist')

      return this;
    }
    checkButton(buttonname) {
      cy
      .contains(buttonname)
      .should('be.visible')

      return this;
    }
    interceptChangeObjectUrl(objecteurl) {
      /*cy.wait('@matchedUrl').then((interception) => {
   
      console.log("intercepted")
      
      console.log(interception)
      
      console.log(interception.request.headers)
      })*/
      
      cy.intercept(objecteurl, (
      req) => {  
      
      req.headers['Accept'] = `*/*`
      
      req.headers['accept'] = `*/*`
      
      req.headers['Accept-Encoding'] = `gzip`
      
      req.headers['accept-encoding'] = `gzip`
      }).as('matchedUrl')

      return this;
    }
    openMenuItemPage(item,id,url){
        cy
        .get('[class="WTCSS-menu-h menu menu-main"]')
        .contains(item)
        .parent()
        .click()
        cy
        .get('[id^=' + id + ']')
        .should('contain', item)
        cy
        .url()
        .should('include', url)

        return this;
    }
    








}