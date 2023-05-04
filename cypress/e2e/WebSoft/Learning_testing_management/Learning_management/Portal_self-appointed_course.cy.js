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
it('Самоназначение курса', function(){ 
    usefulFunctions.openCourseMethodsOfPlanning()
    mainCommands.checkButton('Начать')
    learningManagementCommands.openCourse('Начать')
    cy.wait(5000)

})
it('Проверка статуса назначен', function(){ 
    usefulFunctions.openCourseMethodsOfPlanning()
    learningManagementCommands.checkCourseStatus('Назначен')
})