import {MainCommands} from "./All_pages_commands.cy"
import { PlayersCommands } from "./Page_all_players.cy"

const mainCommands = new MainCommands()
const playersCommands = new PlayersCommands()

export class TestingManagementCommands {

    openAllTests(){
        mainCommands.findHeader('Тесты','WT_0x61EFEE420D834507')
        mainCommands.checkUrl('/assessments')
        
        return this;
    }
    openTestPage(name){
        cy
        .contains(name)
        .click()

        return this;
    }
    openTestPlayer(buttonname){
        cy
        .intercept('POST', '/lpapi.html*').as('matchedUrl')
        cy
        .contains(buttonname)
        .click()
        cy
        .wait('@matchedUrl').then((interception) => {
        cy
        .visit(`/${interception.response.body.result.redirect_url}`)
        })
        cy
        .url()
        .should('include','/qtiplayer3/')

        return this;
    }
    completeTestSuccesfully(){
        playersCommands.clickButtonNext('.wtq-body > .wtq-rubric > .wtq-rubric-footer > .wtq-rubric-footer-table > tbody > tr > .wtq-footer-cell-right > .wtq-btn')
        playersCommands.answerQuestionChose('Франция')
        playersCommands.clickButtonAnswer('[data-ident="3816074005764242176"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionChose('Турция')
        playersCommands.answerQuestionChose('Россия')
        playersCommands.answerQuestionChose('Китай')
        playersCommands.answerQuestionChose('Сингапур')
        playersCommands.clickButtonAnswer('[data-ident="6686079769689233152"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionType('[data-ident="2767547969022324480"] > .wtq-q-area > .wtq-q > .wtq-q-layout > .wtq-q-layout-row > .wtq-q-layout-cell-main > .wtq-q-items-area > .wtq-q-item > .wtq-item-wrapper > .wtq-item-table > .wtq-item-table-row > .wtq-item-part-main > .wtq-item-input','480')// в новом плеере курсов менять строку
        playersCommands.clickButtonAnswer('[data-ident="2767547969022324480"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionChose('Empire State Building')
        playersCommands.clickButtonAnswer('[data-ident="8055215512699350784"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionType('[data-ident="6687205703688419072"] > .wtq-q-area > .wtq-q > .wtq-q-layout > .wtq-q-layout-row > .wtq-q-layout-cell-main > .wtq-q-items-area > .wtq-q-item > .wtq-item-wrapper > .wtq-item-table > .wtq-item-table-row > .wtq-item-part-main > .wtq-item-input','Китай')
        playersCommands.clickButtonAnswer('[data-ident="6687205703688419072"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        // впоследствии добавить правильный ответ с помощью команды realMouseUP/Down
        playersCommands.clickButtonAnswer('[data-ident="5392100121124777728"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.clickButtonAnswer('[data-ident="5392100121124777728"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.clickButtonAnswer('[data-ident="113440049441240064"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        cy
        .get('.wtq-body > .wtq-final > .wtq-final-container > .wtq-final-table > .wtq-final-table-row > .wtq-final-cell-right > .wtq-test-passed-string')
        .should('contain', 'Тест успешно пройден')
        .and('be.visible')

        return this;
    }
    completeTestBadly(){
        playersCommands.clickButtonNext('.wtq-body > .wtq-rubric > .wtq-rubric-footer > .wtq-rubric-footer-table > tbody > tr > .wtq-footer-cell-right > .wtq-btn')
        playersCommands.answerQuestionChose('Великобритания')
        playersCommands.clickButtonAnswer('[data-ident="3816074005764242176"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionChose('Марокко')
        playersCommands.answerQuestionChose('Венгрия')
        playersCommands.clickButtonAnswer('[data-ident="6686079769689233152"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionChose('Турция')
        playersCommands.clickButtonAnswer('[data-ident="6686079769689233152"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionType('[data-ident="2767547969022324480"] > .wtq-q-area > .wtq-q > .wtq-q-layout > .wtq-q-layout-row > .wtq-q-layout-cell-main > .wtq-q-items-area > .wtq-q-item > .wtq-item-wrapper > .wtq-item-table > .wtq-item-table-row > .wtq-item-part-main > .wtq-item-input','80')// в новом плеере курсов менять строку
        playersCommands.clickButtonAnswer('[data-ident="2767547969022324480"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionChose('State Bank')
        playersCommands.clickButtonAnswer('[data-ident="8055215512699350784"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionType('[data-ident="6687205703688419072"] > .wtq-q-area > .wtq-q > .wtq-q-layout > .wtq-q-layout-row > .wtq-q-layout-cell-main > .wtq-q-items-area > .wtq-q-item > .wtq-item-wrapper > .wtq-item-table > .wtq-item-table-row > .wtq-item-part-main > .wtq-item-input','Индия')
        playersCommands.clickButtonAnswer('[data-ident="6687205703688419072"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionType('[data-ident="6687205703688419072"] > .wtq-q-area > .wtq-q > .wtq-q-layout > .wtq-q-layout-row > .wtq-q-layout-cell-main > .wtq-q-items-area > .wtq-q-item > .wtq-item-wrapper > .wtq-item-table > .wtq-item-table-row > .wtq-item-part-main > .wtq-item-input','Россия')
        playersCommands.clickButtonAnswer('[data-ident="6687205703688419072"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.answerQuestionType('[data-ident="6687205703688419072"] > .wtq-q-area > .wtq-q > .wtq-q-layout > .wtq-q-layout-row > .wtq-q-layout-cell-main > .wtq-q-items-area > .wtq-q-item > .wtq-item-wrapper > .wtq-item-table > .wtq-item-table-row > .wtq-item-part-main > .wtq-item-input','Австрия')
        playersCommands.clickButtonAnswer('[data-ident="6687205703688419072"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        // впоследствии добавить правильный ответ с помощью команды realMouseUP/Down
        playersCommands.clickButtonAnswer('[data-ident="5392100121124777728"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.clickButtonAnswer('[data-ident="5392100121124777728"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        playersCommands.clickButtonAnswer('[data-ident="113440049441240064"] > .wtq-q-footer > .wtq-footer-table > tbody > tr > .wtq-footer-cell-main > .wtq-btn-submit')
        cy
        .get('.wtq-body > .wtq-final > .wtq-final-container > .wtq-final-table > .wtq-final-table-row > .wtq-final-cell-right > .wtq-test-failed-string') 
        .should('contain', 'Тест не пройден')
        .and('be.visible')

        return this;
    }





}