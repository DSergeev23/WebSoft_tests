import { PageObject, StateClass, Endpoint, Text } from './case.data'

describe(`Вход на портал`, () => {
  beforeEach(() => {
    cy.log(`Шаг 1 - Перейти на http://127.0.0.1:80`)
    cy.visit(Endpoint.Http)
  })

  it('Содержит текст на главной кнопке:', () => {
    cy.log(`Шаг 2 - Проверить, что кнопка регистрация содержит текст " Регистрация "`)
    cy.get(PageObject.Button)
      .should('have.text', Text.Number)
  })

  it('Вход на портал', () => {
    cy.log(`Шаг 2 - Кликнуть на элемент с текстом "Вход"`)
    cy.contains(Text.Number1)
      .click()
  })

  it('', () => {
      })
})