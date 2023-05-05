import {Login} from "../../../Page_object/Login_page.cy"  


const login = new Login()


beforeEach(function(){
    login.loginUser('FS','FS')

})
it('Запуск теста', function(){
    
})
  //"postchrome-test": "jrm ./results/combined-report.xml \"./results/results-*.xml\"",
    //"script-chrome": "npm run chrome-test || npm run postchrome-test"