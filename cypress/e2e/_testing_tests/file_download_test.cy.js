///<reference types="cypress-downloadfile"/>

import { realHover } from "cypress-real-events/commands/realHover"


it('download_file',function(){
cy.visit('https://dzen.ru/')
realHover()
    //cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})