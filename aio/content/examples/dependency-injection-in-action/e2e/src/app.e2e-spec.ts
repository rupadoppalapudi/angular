import { browser, element, by } from 'protractor';

describe('Dependency Injection Cookbook', () => {

    beforeAll(() => {
        browser.get('');
    });

    it('should render Logged in User example', () => {
      const loggedInUser = element.all(by.xpath('//h3[text()="Logged in user"]')).get(0);
      expect(loggedInUser).toBeDefined();
    });

    it('"Bombasto" should be the logged in user', () => {
      const loggedInUser = element.all(by.xpath('//div[text()="Name: Bombasto"]')).get(0);
      expect(loggedInUser).toBeDefined();
    });

    it('should render sorted heroes', () => {
      const sortedHeroes = element.all(by.xpath('//h3[text()="Sorted Heroes" and position()=1]')).get(0);
      expect(sortedHeroes).toBeDefined();
    });

    it('Dr Nice should be in sorted heroes', () => {
      const sortedHero = element.all(by.xpath('//sorted-heroes/[text()="Dr Nice" and position()=2]')).get(0);
      expect(sortedHero).toBeDefined();
    });

    it('RubberMan should be in sorted heroes', () => {
      const sortedHero = element.all(by.xpath('//sorted-heroes/[text()="RubberMan" and position()=3]')).get(0);
      expect(sortedHero).toBeDefined();
    });

    it('Magma should be in sorted heroes', () => {
      const sortedHero = element.all(by.xpath('//sorted-heroes/[text()="Magma"]')).get(0);
      expect(sortedHero).toBeDefined();
    });

    it('should render Hero of the Month', () => {
      const heroOfTheMonth = element.all(by.xpath('//h3[text()="Hero of the month"]')).get(0);
      expect(heroOfTheMonth).toBeDefined();
    });

    it('should render Hero Bios', () => {
      const heroBios = element.all(by.xpath('//h3[text()="Hero Bios"]')).get(0);
      expect(heroBios).toBeDefined();
    });

    it('should render Magma\'s description in Hero Bios', () => {
      const magmaText =  element.all(by.xpath('//textarea[text()="Hero of all trades"]')).get(0);
      expect(magmaText).toBeDefined();
    });

    it('should render Magma\'s phone in Hero Bios and Contacts', () => {
      const magmaPhone =  element.all(by.xpath('//div[text()="Phone #: 555-555-5555"]')).get(0);
      expect(magmaPhone).toBeDefined();
    });

    it('should render Hero-of-the-Month runner-ups', () => {
      const runnersUp =  element(by.id('rups1')).getText();
      expect(runnersUp).toContain('RubberMan, Dr Nice');
    });

    it('should render DateLogger log entry in Hero-of-the-Month', () => {
      const logs =  element.all(by.id('logs')).get(0).getText();
      expect(logs).toContain('INFO: starting up at');
    });

    it('should highlight Hero Bios and Contacts container when mouseover', () => {
      const target = element(by.css('div[appHighlight="yellow"]'));
      const yellow = 'rgba(255, 255, 0, 1)';

      expect(target.getCssValue('background-color')).not.toEqual(yellow);

      browser.actions().mouseMove(target).perform();

      // Wait for up to 2s for the background color to be updated,
      // to account for slow environments (e.g. CI).
      browser.wait(() => target.getCssValue('background-color').then(c => c === yellow), 2000);
    });

    describe('in Parent Finder', () => {
      const cathy1 = element(by.css('alex cathy'));
      const craig1 = element(by.css('alex craig'));
      const carol1 = element(by.css('alex carol p'));
      const carol2 = element(by.css('barry carol p'));

      it('"Cathy" should find "Alex" via the component class', () => {
        expect(cathy1.getText()).toContain('Found Alex via the component');
      });

      it('"Craig" should not find "Alex" via the base class', () => {
        expect(craig1.getText()).toContain('Did not find Alex via the base');
      });

      it('"Carol" within "Alex" should have "Alex" parent', () => {
        expect(carol1.getText()).toContain('Alex');
      });

      it('"Carol" within "Barry" should have "Barry" parent', () => {
        expect(carol2.getText()).toContain('Barry');
      });
    });
});
