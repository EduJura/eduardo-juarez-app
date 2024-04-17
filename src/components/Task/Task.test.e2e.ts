import { Builder, By, until, Browser } from "selenium-webdriver";

describe("Task Component E2E Test", () => {
  let driver;

  beforeEach(async () => {
    // TODO: Handle Firefox and Safari drivers to in the same test case
    //driver = await new Builder().forBrowser("firefox").build(); // Replace 'firefox' with desired browser
    driver = await new Builder().forBrowser(Browser.CHROME).build(); // Replace 'chrome' with desired browser
    await driver.get("http://localhost:3000/"); // Replace with your development server URL
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
