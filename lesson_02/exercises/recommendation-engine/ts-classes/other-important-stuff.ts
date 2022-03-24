import { Item, User } from "./types";

/**
 * This is a very slow & fragile service that will never work in the test
 */
export class InventoryService {
  findByCategory(): Item[] {
    throw new Error();
  }
}

/**
 * This is a very slow & fragile service that will never work in the test
 */
export class AnalyticsService {
  onRecommendation(item: Item, recommendedItems: Item[]): void {
    throw new Error();
  }
}

/**
 * This is a very slow & fragile service that will never work in the test
 */
export class UserSpendingService {
  amountSpentByUser(user: User): number {
    throw new Error();
  }
}
