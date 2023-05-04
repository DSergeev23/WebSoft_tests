import {Login} from "../Page_object/Login_page.cy"  
import {MainCommands} from "../Page_object/All_pages_commands.cy" 
import { UsefulFunctions } from "../Page_object/All_pages_useful_functions.cy"

 const login = new Login()
 const mainCommands = new MainCommands()
 const usefulFunctions= new UsefulFunctions()

 beforeEach(function(){
    login.loginUser('ag','ag')
   
})
it('Проверка модуля Сообщество', function(){  
    mainCommands.openMenuItemPage('Сообщество','WT_0x631A0AC0694A65DC','/community')
})
it('Проверка модуля Сервисы', function(){  
    mainCommands.openMenuItemPage('Сервисы','WT_0x631729B832C5719F','/allservices')
})
it('Проверка модуля Знания', function(){  
    mainCommands.openMenuItemPage('Знания','WT_0x60ED6DFF7B3958BF','/knowledges')
})
it('Проверка модуля Обучение', function(){  
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
})
it('Проверка модуля Команда', function(){  
    usefulFunctions.openTeamPage()
})
