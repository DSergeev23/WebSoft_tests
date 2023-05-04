export class Login {

    loginUser(login, password){
        cy.visit('/')
        cy.get('input[name="user_login"]').eq(1).type(login) 
        cy.get('input[name="user_password"]').eq(1).type(password)
        cy.contains("Вход").click()
        cy.viewport(1500, 900) //изменение масштаба страницы т.к. не помещается раздел "Команда"
        
        
        return this;
    }

    loginAdmin(login, password){
        cy.visit('/admin',
        {
            auth: {
                username: login,
                password: password,
            }
        }
        )
        cy.get('.WssImage', { timeout: 20000 }).should('exist');

        return this;
    }

}
