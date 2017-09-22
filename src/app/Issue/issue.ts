export class Issue {
  constructor(
    public project: string,
    public issueType: string,
    public summary: string,
    public storyPoints: number,
    public environments: string
  ) {  }
}
