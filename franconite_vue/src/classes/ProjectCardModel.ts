export interface IProjectCard {
  title: string;
  imageUrl: string;
  bodyText: string;
  githubUrl: string;
  githubUrlLabel: string;
}

export class ProjectCardModel implements IProjectCard {
  title: string;
  imageUrl: string;
  bodyText: string;
  githubUrl: string;
  githubUrlLabel: string;

  constructor(title: string, imageUrl: string, bodyText: string, githubUrl: string, githubLabel: string) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.bodyText = bodyText;
    this.githubUrl = githubUrl;
    this.githubUrlLabel = githubLabel;

  }
}

export const ProjectCards = [
  new ProjectCardModel('Python Data',
  '../src/images/sales_vs_vol_vs_pop.png',
  "Database design, seeding, and database analysis of Iowa state Liquor Sales using Anaconda and Bokeh.",
  'https://github.com/kstrckr/python_data_project',
  'Github/Python_Data')
]