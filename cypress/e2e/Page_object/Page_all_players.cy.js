export class PlayersCommands {
    
    findClickObjectInCoursePlayer(iframefirst,iframesecond,object){
        cy 
        .get(iframefirst)
        .its('0.contentDocument')
        .find(iframesecond)
        .its('0.contentDocument')
        .find(object)
        .click()

        return this;
    }
    answerQuestionChose(answer){
        cy
        .contains(answer)
        .click()
        return this;
    }
    clickButtonAnswer(buttonanswer){
        cy
        .get(buttonanswer)
        .click()

        return this;
    }
    answerQuestionType(line,text){
        cy
        .get(line)// в новом плеере курсов менять
        .type(text)
        
        
        return this;
    }
    clickButtonNext(buttonnext){
        cy
        .get(buttonnext)
        .click()
        
        return this;
    }

    

}