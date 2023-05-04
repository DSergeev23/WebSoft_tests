import {Login} from "../../../Page_object/Login_page.cy"  
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy" 
import {MainCommands} from "../../../Page_object/All_pages_commands.cy" 
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"

const login = new Login()
const usefulFunctions = new UsefulFunctions()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()


it('Подача индивидуальной заявки на мероприятие', function(){
    login.loginUser('TA','TA')
    usefulFunctions.openEventList()
    learningManagementCommands.openObjectCard('eLearning Elements 2022','WT_0x612619004EF46FFE')
    mainCommands.findHeader('eLearning Elements 2022','WT_0x60BF6ABB064E1D0E')
    learningManagementCommands.clickButtonApply('WT_0x60EC2139497D087C','Подать заявку')
    usefulFunctions.applyIndividual()
    mainCommands.clickButtonWindow('OK')
})
it('Отображение заявки', function(){  //учитывается условие с исправленным ДО')
   login.loginUser('ON','ON')
   mainCommands.openPersonalArea('НикитаОзеров')
   mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Документы','/requests')
   learningManagementCommands.openApllicationsInDocuments('WT_0x6048CAA95BCD401D','Заявки на согласование')
   learningManagementCommands.chooseApplication('WT_0x6048CCDB387D3E71','eLearning Elements 2022')
   mainCommands.findHeader('eLearning Elements 2022','WT_0x637CAC0B4E161AD0')
   mainCommands.clickButtonHeader('WT_0x637CAD20342B596B','Согласовать заявку')
   mainCommands.clickButtonWindow('Сохранить')
  
})    
it('Отказ от участия в мероприятии', function(){
    login.loginUser('TA','TA')
    usefulFunctions.openEventList()
    learningManagementCommands.openObjectCard('eLearning Elements 2022','WT_0x612619004EF46FFE')
    mainCommands.clickButtonHeader('WT_0x60EC212C11D262CD','Отказаться от участия')
    mainCommands.checkWindowText('[class="ui-dialog wt-lp-main-info ui-widget ui-widget-content ui-front ui-dialog-buttons wt-lp-wrapper-dialog"]','Вы отказались от участия в мероприятии')
    mainCommands.clickButtonWindow('OK')

})
