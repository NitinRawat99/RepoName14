describe("Select Drop Down65",function(){


function Calc(a,b,c)
{
element(by.model('first')).sendKeys(a);
element(by.model('second')).sendKeys(b);

element.all(by.tagName('option')).each(function(data){
data.getAttribute('value').then(function(item){
if(item==c)
{
//    console.log(item);
  //  console.log(c)
   // console.log(data);
    data.click
    element(by.id('gobutton')).click();

}
})
})


}

it("Case65",function(){

    browser.get("https://juliemr.github.io/protractor-demo/");

Calc(3,7,"DIVISION");


element.all(by.repeater('result in memory')).each(function(item12){

    item12.element(by.css("td:nth-child(3)")).getText().then(function(text3){

         console.log(text3);
     
     });

   });

});



}); 