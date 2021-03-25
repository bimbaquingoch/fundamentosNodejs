const puppeteer = require("puppeteer");

// funcion autoejecutada

// let nuevaFunc =
(async () => {
  console.log("navegaor lanzado");
  const browser = await puppeteer.launch({ headless: false });
  //funcion autoejecutada
  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  var title = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(title);

  console.log("navegaor cerrado");
  // browser.close();
})();
