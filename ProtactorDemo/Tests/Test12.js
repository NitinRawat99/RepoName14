describe("Functional test 1",function(){

    browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");


    it("test 1 ",function(){

       
        element(by.css("a[ui-sref='.profile']")).getText().then(function(txt){

            console.log(txt);

            expect(txt).toContain("PROFILE")

        })


    })

     
    it("test 2",function(){

        element(by.model('formData.name')).sendKeys("Nitin");
        element(by.model('formData.email')).sendKeys("ntnrawat99@gmail.com");
        element(by.css("a[ui-sref='form.interests']")).click();
    }) 


    it("test 3",function(){

   element(by.css("a[ui-sref='.interests']")).getText().then(function(txt23){

    console.log(txt23);


element(by.css("label[class='ng-scope']")).getText().then(function(txt35){

console.log(txt35);
expect(txt35).toEqual("What's Your Console of Choice?")
})

   })     

})

it("test 4",function(){

element.all(by.css("div[class=radio] label")).each(function(ele){

ele.getText().then(function(el){

console.log(el);

if(el=="I like PS4")
{
    ele.click();

    element(by.css("a[ui-sref='form.payment']")).click().then(function(){
          browser.sleep(5000);
      
        })
}
})


});

})

it("Test Case 5",function(){

element(by.tagName("h3")).getText().then(function(TestCompletedText){

if(TestCompletedText=="Test Completed, WooHoo!")
{
console.log(TestCompletedText);
element(by.buttonText("Submit")).click().then(function(){

    browser.sleep(5000);
})
}

})


})

it("Test Case 6",function(){
   // browser.waitForAngularEnabled(false);
    browser.switchTo().alert().accept().then(function(){
        browser.sleep(10000);
    })

//    browser.accept();

})


}) 