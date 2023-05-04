import {Login} from "../../../Page_object/Login_page.cy"  
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy" 
import {MainCommands} from "../../../Page_object/All_pages_commands.cy" 
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"

const login = new Login()
const usefulFunctions = new UsefulFunctions()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()

// it('В админке выставление роли для сотрудника Администратор', function(){
//     login.loginAdmin('user1', 'user1')
//     cy
//     .xpath('/html/body/div[1]/div/div/div[5]/div/div[17]/div[1]/div[2]/div[1]/div[1]/div[15]')
//     .dblclick()
//     cy
//     .xpath('/html/body/div[2]/div[2]/div[2]/div[4]/div/div[9]/div[2]')
//     .click()
//     cy
//     .xpath('/html/body/div[2]/div[2]/div[4]/div[1]/div[6]')
//     .click()
//     cy
//     .xpath('/html/body/div[3]/div/div[1]')
//     .click()
//     cy
//     .xpath('/html/body/div[2]/div[2]/div[1]/div[4]')
//     .click()
// }) //временное решение для теста

it('Подача групповой заявки на мероприятие', function(){
    login.loginUser('ZV','ZV')
    usefulFunctions.openEventList()
    learningManagementCommands.openObjectCard('Навыки работы с заемщиками','WT_0x612619004EF46FFE')
    mainCommands.findHeader('Навыки работы с заемщиками','WT_0x60BF6ABB064E1D0E')
    learningManagementCommands.clickButtonApply('WT_0x60EC2139497D087C','Подать заявку')
    usefulFunctions.applyGroup()
    mainCommands.clickButtonWindow('OK')
})
it('Отображение заявки', function(){  //учитывается условие с исправленным ДО')
   login.loginUser('IF','IF')
   mainCommands.openPersonalArea('ФилиппЯсенев')
   mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Документы','/requests')
   learningManagementCommands.openApllicationsInDocuments('WT_0x6048CAA95BCD401D','Заявки на согласование')
   learningManagementCommands.chooseApplication('WT_0x6048CCDB387D3E71','Навыки работы с заемщиками')
   mainCommands.findHeader('Навыки работы с заемщиками','WT_0x637CAC0B4E161AD0')
  
})    
