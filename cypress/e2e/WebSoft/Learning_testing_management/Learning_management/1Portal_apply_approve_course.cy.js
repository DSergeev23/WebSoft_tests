import {Login} from "../../../Page_object/Login_page.cy"  
import {MainCommands} from "../../../Page_object/All_pages_commands.cy" 
import {LearningManagementCommands} from "../../../Page_object/Page_learning_management.cy"

const login = new Login()
const learningManagementCommands = new LearningManagementCommands()
const mainCommands = new MainCommands()


it('Подача индивидуальной заявки на курс', function(){
    login.loginUser('TA','TA')
    mainCommands.openPersonalArea('АннаТитова')
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Документы','/requests')
    learningManagementCommands.chooseTypeOfApplication('WT_0x61E57E003B4A30CC','Заявка на активацию электронного курса')
    learningManagementCommands.chooseCourseInApplication('Выберите элемент','[class="wt-x-show-dialog-frame"]','Инициатива и ответственность')
    learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',1,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','индивидуальная','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
    mainCommands.clickButtonWindow('OK')
    mainCommands.checkWindowText('[class="ui-dialog wt-lp-main-info ui-widget ui-widget-content ui-front ui-dialog-buttons wt-lp-wrapper-dialog"]','Заявка успешно создана')

    
})
it('Отображение заявки', function(){  //учитывается условие с исправленным ДО')
   login.loginUser('ON','ON')
   mainCommands.openPersonalArea('НикитаОзеров')
   mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Документы','/requests')
   learningManagementCommands.openApllicationsInDocuments('WT_0x6048CAA95BCD401D','Заявки на согласование')
   learningManagementCommands.chooseApplication('WT_0x6048CCDB387D3E71','Инициатива и ответственность')
   mainCommands.findHeader('Инициатива и ответственность','WT_0x637CAC0B4E161AD0')
   mainCommands.clickButtonHeader('WT_0x637CAD20342B596B','Согласовать заявку')
   mainCommands.clickButtonWindow('Сохранить')


})    
it('Проверка курса у сотрудника', function(){
    login.loginUser('TA','TA')
    mainCommands.openPersonalArea('АннаТитова')
    mainCommands.checkObjectCardInWidget('Инициатива и ответственность','WT_0x60B79AB3287C4E50')



})