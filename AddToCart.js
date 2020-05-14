let puppeteer = require("puppeteer");

let input1 = process.argv[2];
let fs = require("fs");
(async function(){
    try{
    let rohan = await puppeteer.launch(
        {
            slowMo : 50,
            headless: false,
            defaultViewport: null,
args: ["--start-maximized"]
        }
    );
    let pages = await rohan.pages();
    let page = pages[0];
  
    
    let data = await fs.promises.readFile(input1);
  let { url, password, user, item1, item2, item3, item4, item5 } = JSON.parse(data);
    
await page.goto(url)
await page.setDefaultNavigationTimeout(0);
console.log("Step 1")
await page.type("._2zrpKA._1dBPDZ",user);


await page.type("._2zrpKA._3v41xv._1dBPDZ", password);

await Promise.all(
    [
        page.click("._2AkmmA._1LctnI._7UHT_c"),
        page.waitForNavigation({waitUntil: 'networkidle0'})

    ]
)

    
console.log("Step 2")


    await page.type(".LM6RPg", item1)
    await page.click(".vh79eN")
  
   await page.waitForSelector(".fPjUPw");
   let  costTab = await page.$$(".fPjUPw");
    await costTab[1].select("1000");
    
    page.waitForNavigation();
    console.log("Step 4")
    await page.waitForSelector('._2cLu-l');           
  await page.$('._2cLu-l');             
let newPagePromise = new Promise(x => rohan.once('targetcreated', target => x(target.page())));    
await page.evaluate(()=>document.querySelector('._2cLu-l').click())
               
let newPage = await newPagePromise; 
  
    
    await page.bringToFront();
 
 await page.waitFor(6000);
 await page.waitForSelector('.LM6RPg');
 
await page.click(".LM6RPg");
let str = item1;
let count = str.length;
for (let i = 0; i < count; i++) {
  await page.keyboard.press('Backspace');
}
 await page.type(".LM6RPg", item2)
 await page.click(".vh79eN")

 await page.waitForSelector("._1p7h2j");
 await page.click("._1p7h2j");
 page.waitForNavigation();
 await page.waitForSelector('._2cLu-l');           
  await page.$('._2cLu-l');             
let newPagePromise1 = new Promise(x => rohan.once('targetcreated', target => x(target.page())));    
await page.evaluate(()=>document.querySelector('._2cLu-l').click())
               
let newPage1 = await newPagePromise1; 
    
   
 await page.bringToFront();

 await page.waitFor(6000);
 await page.waitForSelector('.LM6RPg');
 
await page.click(".LM6RPg");
let str1 = item2;
let count1 = str1.length;
for (let i = 0; i < count1; i++) {
  await page.keyboard.press('Backspace');
}
 await page.type(".LM6RPg", item3)
 await page.click(".vh79eN")
 page.waitForNavigation()
 await page.waitForSelector('._2cLu-l');           
  await page.$('._2cLu-l');             
let newPagePromise2 = new Promise(x => rohan.once('targetcreated', target => x(target.page())));    
await page.evaluate(()=>document.querySelector('._2cLu-l').click())
               
let newPage2 = await newPagePromise2; 
    
   

 await page.bringToFront();

 await page.click(".LM6RPg");
let str2 = item3;
let count2 = str2.length;
for (let i = 0; i < count2; i++) {
  await page.keyboard.press('Backspace');
}
 await page.type(".LM6RPg", item4)
 await page.click(".vh79eN")
 page.waitForNavigation()
 await page.waitForSelector('._2cLu-l');           
  await page.$('._2cLu-l');             
let newPagePromise3 = new Promise(x => rohan.once('targetcreated', target => x(target.page())));    
await page.evaluate(()=>document.querySelector('._2cLu-l').click())
               
let newPage3 = await newPagePromise3; 
    await page.bringToFront();

 await page.click(".LM6RPg");
let str3 = item4;
let count3 = str3.length;
for (let i = 0; i < count3; i++) {
  await page.keyboard.press('Backspace');
}
 await page.type(".LM6RPg", item5)
 await page.click(".vh79eN")
 
 await page.waitForSelector('._2cLu-l');           
    
await page.evaluate(()=>document.querySelector('._2cLu-l').click())
               await page.bringToFront();
 await page.click("._3ko_Ud");
}catch(err)
    {
        console.log(err);
    }

})();