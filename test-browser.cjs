const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🚀 Starting Robust Section-by-Section Browser QA with native clicks...');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  // 1. Desktop Test (1440x950)
  console.log('📱 Testing Desktop Viewport (1440x950)...');
  await page.setViewport({ width: 1440, height: 950 });
  await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));

  // Verify Title and Meta
  const title = await page.title();
  console.log(`✓ Page Title: "${title}"`);

  // Verify Hero
  const heroHeading = await page.$eval('h1', el => el.innerText.trim());
  console.log(`✓ Hero Heading: "${heroHeading.replace(/\n+/g, ' ')}"`);
  await page.screenshot({ path: path.join(__dirname, 'screenshot_1_hero.png') });
  console.log('✓ Captured screenshot_1_hero.png');

  // Scroll to Story
  await page.evaluate(() => document.getElementById('story').scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_2_story.png') });
  console.log('✓ Captured screenshot_2_story.png');

  // Scroll to Experience
  await page.evaluate(() => document.getElementById('experience').scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_3_experience.png') });
  console.log('✓ Captured screenshot_3_experience.png');

  // Scroll to Menu & Test Filter
  console.log('☕ Testing Menu & Switching to Artisan Pizzas...');
  await page.evaluate(() => document.getElementById('menu').scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('#menu button'));
    const pizzaBtn = buttons.find(b => b.textContent.includes('Artisan Pizzas'));
    if (pizzaBtn) pizzaBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_4_menu_pizzas.png') });
  console.log('✓ Captured screenshot_4_menu_pizzas.png');

  // Reset to All Offerings
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('#menu button'));
    const allBtn = buttons.find(b => b.textContent.includes('All Offerings'));
    if (allBtn) allBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // Scroll to Gallery & Click First Image for Lightbox
  console.log('🖼️ Testing Gallery Lightbox...');
  await page.evaluate(() => document.getElementById('gallery').scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.click('#gallery [role="button"]');
  await new Promise(r => setTimeout(r, 600));
  const lightboxOpen = await page.evaluate(() => Boolean(document.querySelector('button[aria-label="Close image lightbox"]')));
  console.log(`✓ Lightbox opened: ${lightboxOpen}`);
  if (lightboxOpen) {
    await page.screenshot({ path: path.join(__dirname, 'screenshot_5_lightbox.png') });
    console.log('✓ Captured screenshot_5_lightbox.png');
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));
  }

  // Scroll to Location
  await page.evaluate(() => document.getElementById('location').scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_6_location.png') });
  console.log('✓ Captured screenshot_6_location.png');

  // Scroll to Contact
  await page.evaluate(() => document.getElementById('contact').scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_7_contact.png') });
  console.log('✓ Captured screenshot_7_contact.png');

  // 2. Mobile Viewport Test (390x844)
  console.log('📱 Testing Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_mobile_hero.png') });
  console.log('✓ Captured screenshot_mobile_hero.png');

  // Open mobile drawer
  await page.click('button[aria-label="Open menu"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'screenshot_mobile_drawer.png') });
  console.log('✓ Captured screenshot_mobile_drawer.png');

  if (consoleErrors.length === 0) {
    console.log('🎉 ZERO console errors detected during entire interactive test!');
  } else {
    console.warn('⚠️ Console errors:', consoleErrors);
  }

  await browser.close();
  console.log('✨ All browser tests and section captures COMPLETED successfully!');
})();
