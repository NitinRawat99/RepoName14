describe("Framework function",function(){
it("Framework test",function(){

    browser.get("https://rahulshettyacademy.com/angularpractice/");

    browser.manage().window().maximize();

element(by.css("input[name='name']")).sendKeys("Nitin");

element(by.name("email")).sendKeys("ntnrawat99@gmail.com");

element(by.id("exampleInputPassword1")).sendKeys("Delhi@123");

element(by.css("input[type='checkbox']")).click();

element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();

//var ll=element.all(by.name("inlineRadioOptions")).get(2);

//var boo= 
element.all(by.name("inlineRadioOptions")).get(0).isEnabled().then(function(boo){

  //  var p = new Boolean(result);
  console.log(boo);
//console.log(Boolean(boo));
//expect(boo.isEnabled()).toBe(true);
})

//expect(ll.isEnabled()).toBe(true);

//ll.isEnabled().then(function(result){
//console.log(result);
//})

//expect(Boolean(ll.isEnabled())).toBe(true);

//.any(function(txt65){

//var boo=txt65.isEnabled();

//console.log(txt65);

//})


//console.log(bool);

element(by.name("bday")).sendKeys("03-07-1995");




element(by.buttonText("Submit")).click().then(function(){

    element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(text){
        console.log(text);
    })

})


element(by.name("email")).clear().then(function(){

browser.sleep(5000);

})

element(by.css("input[name='name']")).clear();

element(by.name("name")).sendKeys("M").then(function(){

    element(by.css("div[class='alert alert-danger']")).getText().then(function(error){

       // console.log(error);

//       expect(error).toBe("Name should be at least 2 characters")

       let list = element.all(by.css("div[class='alert alert-danger']"));
       
       list.count().then(function(cnt){

console.log(cnt);
//expect(cnt).toBe(1);
       })
       


    })

})



    browser.getTitle().then(function(title){

        console.log(title);
        browser.sleep(5000);

    })


})


});