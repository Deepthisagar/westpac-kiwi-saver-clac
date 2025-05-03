import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/calculator_page';

test('Projection Estimation', async ({ page }) => {
  const calcPage= new CalculatorPage(page),
         noOfyears = 'In 1 year'
  await page.goto('https://www.westpac.co.nz/kiwisaver-investments/kiwisaver/kiwisaver-calculators/kiwisaver-calculator/')
  // checks if the button is visible and clicks on the button to open the calculator
  await expect(calcPage.calcButton).toBeVisible()
  await calcPage.calcButton.click()

  //1st question 
  await calcPage.ageQuestionField.click()
  await calcPage.ageQuestionField.fill('35')
  await expect(calcPage.nextQuestoin).toBeEnabled()
  await calcPage.nextQuestoin.click()

  //2nd question
  await expect(calcPage.firstHomeButton).toBeVisible()
  await calcPage.firstHomeButton.click()

  //3rd question
  await expect(calcPage.chooseOption).toBeVisible()
  await calcPage.chooseOption.nth(0).click()
  await calcPage.getElementsByTextAndClick(noOfyears) //already declare the number of years
  
  //4th question
  await calcPage.chooseOption.nth(1).click()
  await calcPage.getElementsByTextAndClick('Employed', true)

  //5th question
  await calcPage.income.fill('180000')
  await calcPage.nextQuestoin.nth(1).click()

  //6th question
  await calcPage.balance.fill('150000')
  await calcPage.nextQuestoin.nth(2).click()

  //7th question
  await calcPage.chooseOption.nth(3).click()
  calcPage.getElementsByTextAndClick('4%', false, 1)

  //8th question
  await calcPage.chooseFund.click()
  await  calcPage.typeOfFund.nth(1).scrollIntoViewIfNeeded()
  await calcPage.typeOfFund.nth(1).click()

console.log(noOfyears + ' time we estimate you could withdraw ' + await calcPage.estimationOfWithdrawal.innerText()),
console.log(await calcPage.estimateDropdwn.first().innerText() + ' ,you could have a retirement income of  ' + await calcPage.retirementIncomeEstimate.innerText())
console.log('And Anually ,you could have a retirement income of  ' + await calcPage.annualEstimationOfWithdrawal.innerText())

});
