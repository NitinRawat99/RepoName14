describe("Test scenario for calculator",function(){
    it("Addition Case",function(){

browser.get("http://juliemr.github.io/protractor-demo/");
//browser.get('http://www.angularjs.org');

//browser.actions().mouseMove(element(by.model('first'))).click().perform();
browser.actions().mouseMove(element(by.model('first')).sendKeys('20')).perform();
//browser.actions().mouseMove(element(by.model('second'))).lic.perform();
browser.actions().mouseMove(element(by.model('second')).sendKeys('80')).perform();
           element(by.id('gobutton')).click();
       element(by.css("h2[class='ng-binding']")).getText().then(function(text){

    //    browser.sleep(4000);

    console.log(text);

   // expect(text).toBe('11');


       });
       
       
       
       
       
        // select sel = new select(element(by.model('operator')));
 





    })
});