describe("Test scenario for calculator1",function(){
    it("Addition Case 1",function(){

browser.get("http://juliemr.github.io/protractor-demo/");
//browser.get('http://www.angularjs.org');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('9');
       element(by.id('gobutton')).click();
       
       element(by.model('first')).sendKeys('5');
       element(by.model('second')).sendKeys('4');
      element(by.id('gobutton')).click();
      

element(by.css("tbody")).element(by.css("tr:nth-child(1)")).element(by.css("td:nth-child(3)")).getText().then(function(text3){

    console.log(text3);

});


     //  element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text2){


       //     console.log(text2);


         // })


            

      // element(by.css("h2[class='ng-binding']")).getText().then(function(text1){

    //    browser.sleep(4000);

   // console.log(text1);

//    expect(text1).toBe('11');


  //     });
       
       
       
       
       
        // select sel = new select(element(by.model('operator')));
 





    })
});