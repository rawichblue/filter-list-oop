export class FilterSearch {
  private items: string[];

  constructor(items: string[]) {
    this.items = items;
  }

  // public method filter items by keywords
  public filter(keywords: string[]): string[] {
    let matchKeyword: string[] = [];
    let matchPrefix: string[] = [];

    // loop keywords
    for (const keyword of keywords) {
      // exact match = (item = keyword)
      const foundItem = this.items.filter((item) => item === keyword);

      if (foundItem.length > 0) {
        // create new array
        matchKeyword = matchKeyword.concat(foundItem);
      } else {
        // no exact → filter by startsWith
        matchPrefix = this.items.filter((item) => item.startsWith(keyword));
      }
    }

    // if there is exact match → return it
    // if no exact match → return prefix match
    return matchKeyword.length > 0 ? matchKeyword : matchPrefix;
  }
}
