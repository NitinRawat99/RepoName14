describe("Test scenario for calculator",function(){
    it("Addition Case",function(){

browser.get("http://juliemr.github.io/protractor-demo/");
//browser.get('http://www.angularjs.org');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('9');
       element(by.id('gobutton')).click();
       element(by.css("h2[class='ng-binding']")).getText().then(function(text){

    //    browser.sleep(4000);

    console.log(text);

    expect(text).toBe('11');


       });
       
       
       
       
       
        // select sel = new select(element(by.model('operator')));
 





    })
});