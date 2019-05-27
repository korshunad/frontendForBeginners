const puppeteer = require('puppeteer');
const express = require('express');
const app = express();

const ejs = require('ejs');
/*
describe('puppeteer', () => {
  it('should run client side test successfully', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://192.168.12.102:8081/test/');
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    await browser.close();

    const regex = /AssertionError/g;
    var found = bodyHTML.match(regex);
    expect(found).to.equal(null);
  });
});
app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
*/

let server;
let browser;

describe('puppeteer checks the blog', () => {
  before(async () => {
    app.use(express.static('public'));
    server = app.listen(3000, () => console.log('Example app listening on port 3000!'));
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  });
  it('open home page successfully', async () => {
  /*
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    */
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    //await browser.close();

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">Hello World!</span>");
  });
  it('open about page successfully', async () => {
  /*
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    */
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/about', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    //await browser.close();

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">about</span>");
  });
  after(async () => {
    await browser.close();
    server.close();
  });
});
