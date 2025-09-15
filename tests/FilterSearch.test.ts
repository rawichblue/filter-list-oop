import { FilterSearch } from "@/utils/FilterSearch";
import { QuerySplit } from "@/utils/QuerySplit";

describe("FilterSearch", () => {
  const items = ["1101", "1102", "1103"];
  const filter = new FilterSearch(items);

  test("return exact match (same word)", () => {
    // input: ["1101"] → output: ["1101"]
    expect(filter.filter(["1101"])).toEqual(["1101"]);
    // input: ["1102", "1103"] → output: ["1102", "1103"]
    expect(filter.filter(["1102", "1103"])).toEqual(["1102", "1103"]);
  });

  test("return prefix match (starts with)", () => {
    // input: ["110"] → output: ["1101", "1102", "1103"]
    expect(filter.filter(["110"])).toEqual(["1101", "1102", "1103"]);
  });

  test("exact match is stronger than prefix", () => {
    // input: ["110", "1103"] → output: ["1103"]
    expect(filter.filter(["110", "1103"])).toEqual(["1103"]);
  });

  test("return empty array if not found", () => {
    // input: ["999"] → output: []
    expect(filter.filter(["999"])).toEqual([]);
  });
});

describe("QuerySplit", () => {
  test("split words by space and clean empty", () => {
    // input: "1101 1102" → output: ["1101", "1102"]
    expect(QuerySplit.parse("1101 1102")).toEqual(["1101", "1102"]);
    // input: " 1101   1103  " → output: ["1101", "1103"]
    expect(QuerySplit.parse(" 1101   1103  ")).toEqual(["1101", "1103"]);
    // input: "" → output: []
    expect(QuerySplit.parse("")).toEqual([]);
  });
});
