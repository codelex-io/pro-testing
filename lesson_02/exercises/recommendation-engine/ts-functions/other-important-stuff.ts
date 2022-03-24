import { Item, User } from "./types";

/**
 * This is a very slow & fragile function that will never work in the test
 */
export type FindByCategory = () => Item[];
export const findByCategory: FindByCategory = () => {
  throw new Error();
};

/**
 * This is a very slow & fragile function that will never work in the test
 */
export type OnRecommendation = (item: Item, recommendedItems: Item[]) => void;
export const onRecommendation: OnRecommendation = (item, recommendedItems) => {
  throw new Error();
};

/**
 * This is a very slow & fragile function that will never work in the test
 */
export type AmountSpentByUser = (user: User) => number;
export const amountSpentByUser: AmountSpentByUser = (user: User) => {
  throw new Error();
};
