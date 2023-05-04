import {Login} from "../../../Page_object/Login_page.cy"  
import {TestingManagementCommands} from "../../../Page_object/Page_testing_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const testingManagementCommands = new TestingManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

beforeEach(function(){
    login.loginUser('SO','SO')
})   


it('Проверка кнопки начать в карточке теста', function(){
    usefulFunctions.openTestGeography()
    mainCommands.checkButton('Начать')
    testingManagementCommands.openTestPlayer('Начать')

})
it('Отображение теста в моих задачах', function(){
    mainCommands.openPersonalArea('ОльгаСоколова')
    mainCommands.checkObjectCardInWidget('_Занимательная география_cypress','WT_0x60B79AB3287C4E50')


})
