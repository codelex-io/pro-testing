import { Item, User } from "./types";
import {
  InventoryService,
  AnalyticsService,
  UserSpendingService,
} from "./other-important-stuff";

export class RecommendationEngine {
  inventoryService: InventoryService;
  analyticsService: AnalyticsService;
  userSpendingService: UserSpendingService;

  constructor(
    inventoryService: InventoryService,
    analyticsService: AnalyticsService,
    userSpendingService: UserSpendingService
  ) {
    this.inventoryService = inventoryService;
    this.analyticsService = analyticsService;
    this.userSpendingService = userSpendingService;
  }

  recommend(user: User, item: Item): Item[] {
    throw new Error();
  }
}
