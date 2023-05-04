import {Login} from "../../../Page_object/Login_page.cy"  
import {TestingManagementCommands} from "../../../Page_object/Page_testing_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const testingManagementCommands = new TestingManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()


// it('В админке настройка теста', function(){
//     login.loginAdmin('user1', 'user1')
//     cy
//     .xpath('/html/body/div/div/div/div[3]/div/div[1]/div[1]/div[1]/div[3]')
//     .click()
//     cy
//     .xpath('/html/body/div/div/div/div[3]/div/div[6]/div/div[3]/div[2]')
//     .click()
//     cy
//     .xpath('/html/body/div/div/div/div[5]/div/div[1]/div[11]/div[2]/div/div[1]/div[1]')
//     .dblclick()
//     cy
//     .xpath('/html/body/div[2]/div[2]/div[2]/div[4]/div/div[4]/div[2]')
//     .click()
//     cy
//     .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/div[10]')
//     .click()
//     cy
//     .xpath('/html/body/div[3]/div/div[1]')
//     .click()
//     cy
//     .xpath('./html/body/div[2]/div[2]/div[1]/div[4]')
//     .click()

// })

beforeEach(function(){
    login.loginUser('ZV','ZV')

})
it('Прохождение теста неуспешно', function(){
    usefulFunctions.openTestGeography()
    mainCommands.checkButton('Начать')
    testingManagementCommands.openTestPlayer('Начать')
    testingManagementCommands.completeTestBadly()

})
it('Проверка статуса', function(){
    usefulFunctions.openTestGeography()
    mainCommands.findHeader('Не пройден','WT_0x637B77422CF629BF')

})
it('Проверка баллов', function(){
    usefulFunctions.openTestGeography()
    mainCommands.findHeader('0','WT_0x637B774B60D76ABE')

})
