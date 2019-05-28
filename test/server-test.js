const puppeteer = require('puppeteer');
const express = require('express');
const app = express();

const ejs = require('ejs');

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
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">Hello World!</span>");
  });
  it('open about page successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/about', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">about</span>");
  });
  it('open tutorials page successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/tutorials', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">tutorials</span>");
  });
  it('open articles page successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/articles', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">articles</span>");
  });
  it('open article about HTML successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/html', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">What is HTML?</span>");
  });
  it('open article about CSS successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/css', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">What is CSS?</span>");
  });
  it('open article about frontend successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/frontend', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">So what is Frontend development?</span>");
  });
  it('open article about centering with CSS successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/center-with-css', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">How to Center with CSS in 2019</span>");
  });
  it('open contact page successfully', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/contact', {waitUntil: 'networkidle2'});
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);

    const regex = /<span class="code-right">(.*?)<\/span>/g;
    let found = bodyHTML.match(regex);
    expect(found[0]).to.equal("<span class=\"code-right\">contact</span>");
  });
  after(async () => {
    await browser.close();
    server.close();
  });
});
