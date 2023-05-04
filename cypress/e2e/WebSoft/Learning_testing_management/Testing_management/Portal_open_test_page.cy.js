import {Login} from "../../../Page_object/Login_page.cy"  
import {MainCommands} from "../../../Page_object/All_pages_commands.cy"
import {UsefulFunctions} from "../../../Page_object/All_pages_useful_functions.cy"

const login = new Login()
const mainCommands = new MainCommands()
const usefulFunctions = new UsefulFunctions()

it('Переход на страницу теста', function(){
    login.loginUser('spec','tator')
    usefulFunctions.openTestGeography()
    mainCommands.findHeader('_Занимательная география_cypress', 'WT_0x637B492967441AAB')
})