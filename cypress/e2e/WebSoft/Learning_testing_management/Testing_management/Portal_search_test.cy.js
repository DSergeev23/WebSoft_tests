import {Login} from "../../../Page_object/Login_page.cy"  
import {TestingManagementCommands} from "../../../Page_object/Page_testing_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"

const login = new Login()
const testingManagementCommands = new TestingManagementCommands()
const mainCommands = new MainCommands()


it('Корректный поиск теста', function(){
    login.loginUser('spec','tator')
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все тесты')
    testingManagementCommands.openAllTests()
    mainCommands.typeInSearchField('WT_0x60F5A5280B0A2DD9', 'география')
    mainCommands.checkSearchResult('_Занимательная география_cypress','Знаете ли вы литературу')
   
})