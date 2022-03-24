import { Item, User } from "./types";
import {
  FindByCategory,
  OnRecommendation,
  AmountSpentByUser,
} from "./other-important-stuff";

type Args = {
  functions: {
    findByCategory: FindByCategory;
    onRecommendation: OnRecommendation;
    amountSpentByUser: AmountSpentByUser;
  };
  user: User;
  item: Item;
};

export const recommend = ({ functions, user, item }: Args): Item[] => {
  throw new Error();
};
