import {LearningManagementCommands} from "./Page_learning_management.cy"
import { MainCommands } from "./All_pages_commands.cy"
import {TestingManagementCommands} from "./Page_testing_management.cy"

const mainCommands = new MainCommands()
const learningManagementCommands = new LearningManagementCommands()
const testingManagementCommands = new TestingManagementCommands()

export class UsefulFunctions{

openEventList(){
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все мероприятия')
    learningManagementCommands.openEventsCalendar()
    learningManagementCommands.openEventsList('WT_0x612617A1201E373D','Список')

    return this;
}

applyIndividual(){
    learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',0,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','индивидуальная','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
    learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',0,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','Собственное желание','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
    mainCommands.checkWindowText('[class="ui-dialog wt-lp-main-info ui-widget ui-widget-content ui-front ui-dialog-buttons wt-lp-wrapper-dialog"]','Заявка успешно создана')

    return this;
}
applyGroup(){
    learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',0,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','групповая','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
    learningManagementCommands.chooseUserInGroupApllication('Выберите элемент','[class="wt-x-show-dialog-frame"]','Ветров Игорь Валерьевич','//*[@id="button-1041"]','//*[@id="button-1060-btnEl"]')
    learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',0,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','Собственное желание','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
    mainCommands.checkWindowText('[class="ui-dialog wt-lp-main-info ui-widget ui-widget-content ui-front ui-dialog-buttons wt-lp-wrapper-dialog"]','Заявка успешно создана')
    
    return this;
}
// applyIndividual(){
//     learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',0,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','индивидуальная','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
//     learningManagementCommands.chooseObjectInApllication('[class="wt-lp-dialog-fld"]',0,'click','[class="ui-selectmenu-menu ui-front ui-selectmenu-open"]','Собственное желание','[class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"]')
//     mainCommands.checkWindowText('[class="ui-dialog wt-lp-main-info ui-widget ui-widget-content ui-front ui-dialog-buttons wt-lp-wrapper-dialog"]','Заявка успешно создана')

//     return this;
// }
// passedTest(){
//     testingManagementCommands.completeTestSuccesfully(
//     '.wtq-body > .wtq-rubric > .wtq-rubric-footer > .wtq-rubric-footer-table > tbody > tr > .wtq-footer-cell-right > .wtq-btn',
//     '[data-ident="3816074005764242176"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit', 
//     '[data-ident="6686079769689233152"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="2767547969022324480"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="8055215512699350784"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="6687205703688419072"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="5392100121124777728"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="113440049441240064"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit'
//     )
//     return this;
// }
// failedTest(){
//     testingManagementCommands.completeTestBadly(
//     '.wtq-body > .wtq-rubric > .wtq-rubric-footer > .wtq-rubric-footer-table > tbody > tr > .wtq-footer-cell-right > .wtq-btn',
//     '[data-ident="3816074005764242176"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit', 
//     '[data-ident="6686079769689233152"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="2767547969022324480"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="8055215512699350784"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="6687205703688419072"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="5392100121124777728"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit',
//     '[data-ident="113440049441240064"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit'
//     )
//     return this;
// }
openTeamPage(){
    mainCommands.clickMenu('Команда')
    mainCommands.check2WaysHeader('.wt-lp-wheader-txt-container', 'text', /Кабинет руководителя|Мои коллеги/)
    mainCommands.checkUrl('/team')

    return this;
}
openCourseRiseScorm(){
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все электронные курсы')
    learningManagementCommands.openAllCourses()
    learningManagementCommands.openCoursePage('rise | scorm 2004-4 | slides + finish-button | passed/incomplete')

    return this;
}
openCourseMethodsOfPlanning(){
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все электронные курсы')
    learningManagementCommands.openAllCourses()
    learningManagementCommands.openCoursePage('Методы планирования')

    return
}
openTestGeography(){
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все тесты')
    testingManagementCommands.openAllTests()
    testingManagementCommands.openTestPage('_Занимательная география_cypress')
    
    return this;
}

}

