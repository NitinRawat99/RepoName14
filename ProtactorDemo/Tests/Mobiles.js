describe("Test Scenario895",function(){

    it("Test Case895",function(){

browser.get("https://rahulshettyacademy.com/angularpractice/");

element(by.linkText("Shop")).click().then(function(){

   browser.sleep(5000); 
})

element.all(by.tagName('app-card')).each(function(tpo){

//console.log("hey");
tpo.element(by.css("h4[class='card-title'] a")).getText().then(function(txt){
if(txt=="Blackberry")
{
    element(by.css("button[class='btn btn-info']")).click();
   browser.sleep(5000)
}
})

})

element(by.css("a[class='nav-link btn btn-primary']")).click();
element(by.css("td[class='col-sm-1 col-md-1 text-center'] strong")).getText().then(function(CostText){

element(by.css("td[class='text-right'] h3 strong")).getText().then(function(TotalCost){

if(CostText==TotalCost)
{
    console.log("total cost correctly reported");
}

})



})

    })



})