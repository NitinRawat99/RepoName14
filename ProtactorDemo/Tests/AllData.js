 describe("Test scenario for calculator5",function(){
    it("Addition Case 5",function(){

browser.get("http://juliemr.github.io/protractor-demo/");
//browser.get('http://www.angularjs.org');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('9');
       element(by.id('gobutton')).click();
       
       element(by.model('first')).sendKeys('5');
       element(by.model('second')).sendKeys('4');
      element(by.id('gobutton')).click();
      
      element(by.model('first')).sendKeys('5');
       element(by.model('second')).sendKeys('5');
      element(by.id('gobutton')).click();

      element.all(by.repeater('result in memory')).each(function(item){

       item.element(by.css("td:nth-child(3)")).getText().then(function(text3){

            console.log(text3);
        
        });

      });


    })
});