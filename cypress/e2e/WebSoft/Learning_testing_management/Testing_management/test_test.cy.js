import {Login} from "../../../Page_object/Login_page.cy"  
import { MainCommands } from "../../../Page_object/All_pages_commands.cy"
import { TestingManagementCommands } from "../../../Page_object/Page_testing_management.cy"

const mainCommands = new MainCommands()
const testingManagementCommands = new TestingManagementCommands()
const login = new Login()

beforeEach(function(){
    login.loginUser('FS','FS')

})
it('Запуск теста', function(){
    
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все тесты')
    testingManagementCommands.openAllTests()
    testingManagementCommands.openTestPage('Занимательная география')
    testingManagementCommands.openTestPlayer('Начать')
    cy
        .contains('Продолжить')
        .click()
        cy.get('.continue')
        .click()

})
  //"postchrome-test": "jrm ./results/combined-report.xml \"./results/results-*.xml\"",
    //"script-chrome": "npm run chrome-test || npm run postchrome-test"