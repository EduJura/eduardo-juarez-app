import { Builder, By, until, Browser } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";
import { printE2ETestInfo } from "../../utils/";

const baseURL = process.env.REACT_APP_SELENIUM_TEST_URL;
const isDevMode = process.env.DEV_MODE;

describe("Task Component E2E Test", () => {
  let driver: any;

  jest.setTimeout(20000);
  jest.retryTimes(3);

  beforeEach(async () => {
    // TODO: Handle Firefox and Safari drivers to in the same test case
    const options = new Options();
    let driverOptions = isDevMode
      ? options
      : options.addArguments("--headless");

    driver = await new Builder().forBrowser(Browser.CHROME)
      .setChromeOptions(driverOptions)
      .build();
    
    console.log("Options: ", options);
    console.log(`SELENIUM_URL:::: ${baseURL}#/to-do`);

    await driver.get(`${baseURL}`);
    await driver.navigate().to(`${baseURL}#/to-do`);
    printE2ETestInfo(baseURL, driver);
  });
  afterEach(async () => {
    await driver.quit();
  });

  it("Should populate input task field and add a task to the list", async () => {
    const task = {
      id: 0,
      name: "My ToDo task",
    };
    const inputTaskElement = await driver.findElement(
      By.xpath("//input[@data-testid='task-input']")
    );
    const changeButton = await driver.findElement(
      By.xpath("//button[@data-testid='save-task-button']")
    );

    await driver.wait(until.elementIsVisible(inputTaskElement), 500);
    await inputTaskElement.sendKeys(task.name);
    await changeButton.click();

    // Ensure the task is added to the list
    const taskElement = await driver.findElement(By.tagName("h2"));
    await driver.sleep(1200);
    expect(await taskElement.getText()).toContain(`${task.name} - ${task.id}`);
  });
});
