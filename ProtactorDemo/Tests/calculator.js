describe('demo calculator tests',function(){

    it('addition test',function(){

browser.get("http://juliemr.github.io/protractor-demo/");

var ele1=element(by.model('first'));

ele1.sendKeys("5");

element(by.model('second')).sendKeys('3');

element(by.css('[ng-click="doAddition()"]')).click();

let result = element(by.cssContainingText('.ng-binding','6'));

expect(result.getText()).toEqual('8');

browser.sleep(14000)

    })


})