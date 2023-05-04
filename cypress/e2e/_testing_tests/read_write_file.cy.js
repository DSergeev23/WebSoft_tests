/// <reference types="cypress">/

before(function(){
    cy.fixture('example.json').as('test_data') //другой способ вывести имя(конец к этой же функции относится())
})
it('Read files using fixture',function(){

cy.fixture('example.json').then((data)=>{
cy.log(data.name)
cy.log(data.email)
})

cy.log(this.test_data.name)
})
it('Read files using readFile',function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})
    it('Write file',function(){
        cy.writeFile('sample.txt','hello world')
        cy.writeFile('sample.txt','hello bro',{flag:'a+'})
    })
