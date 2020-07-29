const puppeteer = require('puppeteer');
const fs = require("fs");

const urls = [
    {
        "visit": "http://localhost:5000/catalog",
        "dir": "build/catalog"
    },
    {
        "visit": "http://localhost:5000/",
        "dir": "build"
    },
    {
        "visit": "http://localhost:5000/detail/1",
        "dir": "build/detail/1"
    },
    {
        "visit": "http://localhost:5000/detail/2",
        "dir": "build/detail/2"
    },
    {
        "visit": "http://localhost:5000/detail/3",
        "dir": "build/detail/3"
    },
    {
        "visit": "http://localhost:5000/detail/4",
        "dir": "build/detail/4"
    },

]

async function writePage(current) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(current.visit, { waitUntil: 'networkidle2' });
    const html = await page.content();
    fs.mkdirSync(current.dir, { recursive: true });
    fs.writeFileSync(current.dir + "/index.html", html);
    await browser.close();
    return true;
}


urls.map(
    async (current) => {
        await writePage(current);
    }
);
