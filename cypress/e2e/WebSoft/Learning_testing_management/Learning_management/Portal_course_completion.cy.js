import {Login} from "../../../Page_object/Login_page.cy"  
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import { UsefulFunctions } from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

it('Открытие и прохождение курса', function(){
    mainCommands.interceptChangeObjectUrl('**/TEMP/*/**')
    login.loginUser('TA','TA')
    usefulFunctions.openCourseRiseScorm()
    mainCommands.checkButton('Начать')
    learningManagementCommands.completeCourse()

})
it('Проверка статуса завершен', function(){ 
    login.loginUser('TA','TA')
    usefulFunctions.openCourseRiseScorm()
    mainCommands.findHeader('Завершен','WT_0x637206A63E64741F')

})
it('Проверка баллов', function(){ 
    login.loginUser('TA','TA')
    usefulFunctions.openCourseRiseScorm()
    mainCommands.findHeader('0','WT_0x637206AE54985ECB')

})