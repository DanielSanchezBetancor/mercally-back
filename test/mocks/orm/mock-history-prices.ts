import { ResultSetHeader } from "mysql2";
import HistoryPrices from "../../../orm/HistoryPrices/HistoryPrices";
import { getOriginalPriceMock } from "./mock-prices";
import { HistoryPrice } from "../../../orm/HistoryPrices/HistoryPricesBase";

function getOriginalHistoryPriceMock(id: number) {
  return {
    ...getOriginalPriceMock(id),
    date: "2021-01-01",
  }
};

function mockHistoryPrices(noValue: boolean  = false) {
  const getProductHistorySpy = jest.spyOn(HistoryPrices.prototype, "getProductHistory").mockImplementation(async (productId: string, storesId: string[], from: string, to: string) => {
    const historyPriceValue = !noValue ? [getOriginalHistoryPriceMock(Number(productId))] : [];
    return historyPriceValue as unknown as ResultSetHeader & HistoryPrice[];
  });

  return { getProductHistorySpy };
};

export { mockHistoryPrices, getOriginalHistoryPriceMock };
