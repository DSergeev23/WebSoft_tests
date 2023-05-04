import {Login} from "../../../Page_object/Login_page.cy"   
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"

const login = new Login()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()


beforeEach(function(){
    login.loginUser('spec','tator')
})   

it('Переход на страницу курса', function(){
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все электронные курсы')
    learningManagementCommands.openAllCourses()
    learningManagementCommands.openCoursePage('Навыки аргументации')
    mainCommands.findHeader('Навыки аргументации', 'WT_0x6372025B4AE262CF')
})

