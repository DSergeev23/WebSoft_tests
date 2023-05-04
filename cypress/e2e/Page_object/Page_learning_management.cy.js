import {MainCommands} from "./All_pages_commands.cy"
import { PlayersCommands } from "./Page_all_players.cy"

const mainCommands = new MainCommands()
const playersCommads= new PlayersCommands()

export class LearningManagementCommands {
    
    openAllCourses(){
        mainCommands.findHeader('Электронные курсы','WT_0x61EFEF73486B2E13')
        mainCommands.checkUrl('/courses')
    
        return this;
    }
    openCoursePage(name){
        cy
        .contains(name)
        .click()
    
        return this;
    }
    openCourse(buttonname){
        cy
        .contains(buttonname)
        //.invoke('removeAttr', 'target')
        .click()

        return this;
    }
    openEventsCalendar(){
        mainCommands.findHeader('Календарь учебных мероприятий','WT_0x612617833F9A28BB')
        mainCommands.checkUrl('/calendar')
        
        return this;
    }
    openEventsList(id,item){
        cy
        .get('[id^='+id+']')
        .contains(item)
        .click()
        .should('be.visible')
        .and('have.attr','wt-state','selected')

        return this;
    }
    openObjectCard(header, id){
        cy
        .get('[id^='+id+']')
        .contains(header)
        .click()
        
        return this;
    }
    clickButtonApply(id,buttonname){
       cy
       .get('[id^='+id+']')
       .contains(buttonname)
       .click()

       return this;
    }
    chooseObjectInApllication(locator,positionnumber,trigger,openedmenu,menuchoice,tabindexclass){
        cy
        .get(locator)
        .eq(positionnumber)
        .trigger(trigger)
        cy
        .get(openedmenu)
        .contains(menuchoice)
        .click()
        cy
        .get(tabindexclass)
        .contains(menuchoice)
        .should('be.visible')
        cy
        .contains('OK')
        .click()


        return this;
    }
    openApllicationsInDocuments(id,item){
        cy
        .get('[id^='+id+']')
        .contains(item)
        .click()
        .should('be.visible')
        .and('have.attr','wt-state','selected')


        return this;
    }
    chooseApplication(id,item){
        cy
        .get('[id^='+id+']')
        .contains(item)
        .click()
        .should('contain',item)

        return this;
    }
    checkCourseStatus(status){
        cy
        .contains('Статус')
        .should('be.visible')
        cy
        .contains(status)
        .should('be.visible')

        return this;
    }
    chooseTypeOfApplication(id,item){
        cy
        .get('[id^='+id+']')
        .contains(item)
        .parent()
        .siblings('[class="wt-lp-witemlist-item-info-wrapper"]')
        .children()
        .children()
        .children()
        .click()


        return this;
    }
    chooseCourseInApplication(buttonelement, iframelocator,coursename){
        cy
        .contains(buttonelement)
        .click()
        .wait(20000)
    
        const iframe=cy.get(iframelocator) //функция фрейма для взаимодействия с элементами внутри окна
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe
        .contains(coursename)
        .click()
        iframe
        .xpath('//*[@id="ext-element-20"]')// менять локатор
        .click()
        .wait(3000)
        
        
        return this;
    }
    chooseUserInGroupApllication(buttonname,iframelocator,username,buttonedit,buttonchoose){
        cy
        .contains(buttonname)
        .click()
        .wait(20000)
        const iframe1=cy
        .get(iframelocator) //функция фрейма для взаимодействия с элементами внутри окна
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe1
        .contains(username)
        .click()
        iframe1
        .xpath(buttonedit)
        //.get('[class="x-btn cssXPButton XAML-button XAML-button-plus x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-btn-over"]')
        .click()
        .wait(2000)
        iframe1
        .xpath(buttonchoose) 
        .click()
        cy
        .contains('OK')
        .click()

        return this;
    }
    clickButtonNextManagerApplication(){
        cy
        .get('[class="wt-lp-witemlist-btn-more"]').eq(1)
        .contains('Далее')
        .click()

        return this;
    }
    completeCourse(){
        cy
        .intercept('POST', '/lpapi.html*').as('matchedUrl2')
        cy
        .contains('Начать')
        .click()
        cy
        .wait('@matchedUrl2').then((interception) => {
        cy
        .visit(`/${interception.response.body.result.redirect_url}`)
        }) 
        playersCommads.findClickObjectInCoursePlayer('iframe#cp_course_container','iframe#content-frame','#overview > header > div > div.overview__side-content > div > div > div.overview__title-wrap > div > h1')
        cy
        .should('contain','rise | scorm 2004-4 | slides + finish-button | passed/incomplete')
        playersCommads.findClickObjectInCoursePlayer('iframe#cp_course_container','iframe#content-frame','#overview > header > div > div.overview__side-content > div > div > div:nth-child(3) > a.overview__button.brand--color.brand--ui')
        playersCommads.findClickObjectInCoursePlayer('iframe#cp_course_container','iframe#content-frame','#page-wrap > main > div > div.next-lesson.brand--linkColorHover > a > div.next-lesson__name.brand--ui')
        playersCommads.findClickObjectInCoursePlayer('iframe#cp_course_container','iframe#content-frame','#page-wrap > main > div > div.next-lesson.brand--linkColorHover > a > div.next-lesson__name.brand--ui')
        cy.wait(1000)
        playersCommads.findClickObjectInCoursePlayer('iframe#cp_course_container','iframe#content-frame','#page-wrap > main > div > div.page__wrapper.page__wrapper--white > div.page__content > section > div:nth-child(1) > div > div > div > div > section > span')
        cy.wait(2000)
        return this;
    }








}