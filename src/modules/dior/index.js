/**
 * @description dior 的唇膏网页的爬虫
 * @author zhi
 * @document https://pptr.dev/
 */

const puppeteer = require('puppeteer');

const { sleep } = require('../../utils/common');

const dior =
  'https://www.dior.cn/zh_cn/products/beauty-Y0038009-%E5%85%A8%E6%96%B0dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E6%8C%9A%E7%BA%A2%E5%94%87%E8%86%8F-%E7%82%BD%E8%89%B2-%E6%8C%81%E5%A6%86-%E8%BD%BB%E7%9B%88%E6%B0%B4%E6%B6%A6';

const AutoExtractData = async (url, path) => {
  const browser = await puppeteer.launch({
    devtools: true,
    headless: false,
  });

  const page = await browser.newPage();

  page.setViewport({
    width: 1376,
    height: 768,
  });

  await page.goto(url);
  //   await page.waitFor(10000);

  //   const elements = await page
  //     .$eval('body', elements => {
  //       console.warn('elements: ', elements.value);
  //       return elements.getAttribute('style');
  //     })
  //     .catch(error => {
  //       console.warn(error);
  //     });

  //   const dom = await page.$eval('.swatch', () => {
  //     // console.warn(document);
  //     // return document.querySelectorAll('.swatch');
  //   });

  // TODO: 获取所有色号的图片，document.querySelector('.swatch.variation').querySelector('img').getAttribute('src')
  // TODO: 所有色号的选项
  // TODO: '.variation-option' 所有色号对应的信息
  const elements = await page.$$('.swatch');

  for (let i = 0; i < elements.length; i++) {
    await elements[i].tap();
    await sleep(2000);
  }

  await browser.close();
};

if (require.main) {
  (function() {
    AutoExtractData(dior);
  })();
}
