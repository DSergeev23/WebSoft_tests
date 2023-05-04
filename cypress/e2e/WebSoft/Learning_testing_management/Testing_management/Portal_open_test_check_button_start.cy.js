import {Login} from "../../../Page_object/Login_page.cy"  
import {TestingManagementCommands} from "../../../Page_object/Page_testing_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const testingManagementCommands = new TestingManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

beforeEach(function(){
    login.loginUser('spec','tator')
})   

it('Проверка кнопки начать в карточке теста', function(){
    usefulFunctions.openTestGeography()
    mainCommands.checkButton('Начать')
})

it('Запуск теста', function(){
    usefulFunctions.openTestGeography()
    testingManagementCommands.openTestPlayer('Начать')
    
})
it('Проверка факта назначения', function(){
    usefulFunctions.openTestGeography()
    mainCommands.findHeader('Назначен','WT_0x637B77422CF629BF')
    
})
