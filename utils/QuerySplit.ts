export class QuerySplit {
  // split query with space and filter out empty values
  public static parse(query: string): string[] {
    return query.split(" ").filter(Boolean);
  }
}
