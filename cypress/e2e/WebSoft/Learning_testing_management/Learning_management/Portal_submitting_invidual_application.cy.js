import {Login} from "../../../Page_object/Login_page.cy"  
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy" 
import {MainCommands} from "../../../Page_object/All_pages_commands.cy" 
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"

const login = new Login()
const usefulFunctions = new UsefulFunctions()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()

it('Подача индивидуальной заявки на мероприятие', function(){
    login.loginUser('BT','BT')
    usefulFunctions.openEventList()
    learningManagementCommands.openObjectCard('Навыки работы с заемщиками','WT_0x612619004EF46FFE')
    mainCommands.findHeader('Навыки работы с заемщиками','WT_0x60BF6ABB064E1D0E')
    learningManagementCommands.clickButtonApply('WT_0x60EC2139497D087C','Подать заявку')
    usefulFunctions.applyIndividual()
    mainCommands.clickButtonWindow('OK')
})
it('Отображение заявки', function(){  //учитывается условие с исправленным ДО')
   login.loginUser('KM','KM')
   mainCommands.openPersonalArea('МаксимКедров')
   mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Документы','/requests')
   learningManagementCommands.openApllicationsInDocuments('WT_0x6048CAA95BCD401D','Заявки на согласование')
   learningManagementCommands.chooseApplication('WT_0x6048CCDB387D3E71','Навыки работы с заемщиками')
   mainCommands.findHeader('Навыки работы с заемщиками','WT_0x637CAC0B4E161AD0')
  
})    
