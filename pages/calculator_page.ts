import {Locator, Page, expect } from '@playwright/test'

export class CalculatorPage {
    readonly page: Page
    readonly calcButton: Locator
    readonly ageQuestionField: Locator
    readonly nextQuestoin: Locator
    readonly firstHomeButton: Locator
    readonly chooseOption: Locator
    readonly noOfYearsDropdwn: Locator
    readonly noOfYearsExp: Locator
    readonly employementStatus: Locator
    readonly income: Locator
    readonly balance: Locator
    readonly contributionRate: Locator
    readonly typeOfFund: Locator
    readonly chooseFund: Locator
    readonly retirementIncomeEstimate: Locator
    readonly estimationOfWithdrawal: Locator
    readonly estimateDropdwn: Locator
    readonly annualEstimationOfWithdrawal: Locator


    
    constructor(page: Page) {
        this.page = page
        this.calcButton = page.getByRole('button',{ name:'Open the calculator' })
        this.ageQuestionField = page.locator('//form //input[@id="text-QUESTION_AGE"]')
        this.nextQuestoin = page.getByRole('button',{ name:'Next Question' })
        this.firstHomeButton = page.locator('//button //span[text()="First Home"]')
        this.chooseOption = page.getByLabel('Choose option')
        this.income = page.locator('//form //input[@id="text-QUESTION_INCOME"]')
        this.balance = page.locator('//form //input[@id="text-QUESTION_KIWISAVER_BALANCE"]')
        this.chooseFund = page.getByLabel('Choose fund')
        this.typeOfFund = page.getByText('High Growth')
        this.retirementIncomeEstimate = page.locator('//span[text()="ESTIMATE"]/ancestor::p //span[contains(text(),"$")]')
        this.estimationOfWithdrawal = page.locator('(//p //span[contains(text(),"$")])[1]')
        this.estimateDropdwn = page.getByText('Weekly') 
        this.annualEstimationOfWithdrawal = page.locator('(//p //span[contains(text(),"$")]/following-sibling::span)[1]')

    }

     getElementsByTextAndClick = async( textOfTheWebElement: string, exactValue= false, nth:number=0) =>
    {

        await this.page.getByText(textOfTheWebElement, {exact: exactValue}).nth(nth).click()
    }
}