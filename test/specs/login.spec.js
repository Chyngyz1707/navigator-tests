const LoginPage = require('./../pageobjects/Login.po');



describe('Login test suit',function(){
    it ('should login as admin',function(){
     LoginPage.open();
       /* let loginField = $('input[type ="text"]');
        loginField.setValue("Admin");*/
     LoginPage.fillUserName.setValue();
       /* let passwordField = $('input[type="password"]');
        passwordField.setValue("Admin@Navi");*/
        LoginPage.password.setValue();

       /* let loginButton = $('button[type="submit"]');
        loginButton.click();*/
        LoginPage.loginButton.click();

        browser.pause(5000);
    });
});