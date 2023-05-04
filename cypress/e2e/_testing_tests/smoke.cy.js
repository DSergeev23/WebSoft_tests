import Login from '../PageObject/Login.cy';
const login = new Login();

describe('My First Test2', () => {


  it('Вход с невалидными данными', () => {
    
    login.loginUser('ag','ag1');
    cy.contains("OK").click()
    cy.url().should('include', '/default')
    

  })


})

describe('My First Test2', () => {

    beforeEach(() => {
      login.loginUser('ag','ag');
    })
  
    it('Вход с валидными данными', () => {
       
      cy.url().should('include', '/home')
      cy.get('.slider-main-header').eq(1).should('have.text', 'Добро пожаловатьна HR-портал!')
  
    })
  
    
  
    it('Проверка пунктов меню', () => {
  
      cy.get('.menu-link').contains("Сообщество").click({force: true})
      cy.url().should('include', '/community')
  
    })
  
  
  })

