import {Login} from "../../../Page_object/Login_page.cy"  
import {TestingManagementCommands} from "../../../Page_object/Page_testing_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const testingManagementCommands = new TestingManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

beforeEach(function(){
    login.loginUser('ZO','ZO')

})
it('Запуск теста', function(){
    usefulFunctions.openTestGeography()
    mainCommands.checkButton('Начать')
    testingManagementCommands.openTestPlayer('Начать')
    cy
    .get('.wtq-body > .wtq-rubric > .wtq-rubric-footer > .wtq-rubric-footer-table > tbody > tr > .wtq-footer-cell-right > .wtq-btn')
    .click()

})
it('Проверка статуса', function(){
    usefulFunctions.openTestGeography()
    mainCommands.findHeader('В процессе','WT_0x637B77422CF629BF')

})
it('Проверка баллов', function(){
    usefulFunctions.openTestGeography()
    mainCommands.findHeader('0','WT_0x637B774B60D76ABE')

})