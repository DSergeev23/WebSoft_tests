import {Login} from "../../../Page_object/Login_page.cy"  
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import { UsefulFunctions } from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

it('Проверка открытия мероприятия через представление список', function(){
    login.loginUser('BT','BT')
    usefulFunctions.openEventList()
    learningManagementCommands.openObjectCard('Навыки работы с заемщиками','WT_0x612619004EF46FFE')
    mainCommands.findHeader('Навыки работы с заемщиками','WT_0x60BF6ABB064E1D0E')

})