describe("Test Scenario",function(){

    it("Test Case210",function(){

        function MyFunction(p1,p2,mod){
            element(by.model('first')).sendKeys(p1);
        element(by.model('second')).sendKeys(p2);
        element(by.cssContainingText("[ng-model='operator'] option",mod)).click();

       element(by.id('gobutton')).click();

       element(by.css("tbody")).element(by.css("tr:nth-child(1)")).element(by.css("td:nth-child(3)")).getText().then(function(text3){

        //console.log(text3);

  //      browser.sleep(5000);
    
    });
       
        }



browser.get("http://juliemr.github.io/protractor-demo/");

MyFunction(5,4,'*');
MyFunction(6,7,'+');
MyFunction(45,34,'-');
MyFunction(72,9,'/');

/** 
element(by.css("tbody")).element(by.css("tr:nth-child(1)")).element(by.css("td:nth-child(3)")).getText().then(function(text3){

    console.log(text3);

});
**/
element.all(by.repeater('result in memory')).each(function(ele){

ele.element(by.css("td:nth-child(3)")).getText().then(function(tx26){

console.log(tx26);

});

});





    })



})