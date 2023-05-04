import {Login} from "../../../Page_object/Login_page.cy"  
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import { UsefulFunctions } from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

beforeEach(function(){
    login.loginUser('spec','tator')
})   

it('Проверка наличия кнопки "начать"', function(){  
    usefulFunctions.openCourseRiseScorm()
    mainCommands.checkButton('Начать')

})
it('Открытие курса сотрудником на портале', function(){ 
    usefulFunctions.openCourseRiseScorm()
    mainCommands.checkButton('Начать')
    learningManagementCommands.openCourse('Начать')
    cy.reload()

})
it('Проверка статуса в процессе', function(){ 
    usefulFunctions.openCourseRiseScorm()
    mainCommands.findHeader('Назначен','WT_0x637206A63E64741F')

})