export class CategoryEnum {
 // values
    static NEWS = new CategoryEnum("News");
    static MARKETS = new CategoryEnum("Markets");
    static TECHNOLOGY = new CategoryEnum("Technology");
    static PERSONAL_FINANCE = new CategoryEnum("Personal Finance");
    static LIFESTYLE = new CategoryEnum("Lifestyle");
    static SMALL_BUSINESS = new CategoryEnum("Small Business");


    constructor(public value: string) {
    }
}
