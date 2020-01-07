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

  constructor(project: IProjectCard) {
    this.title = project.title;
    this.imageUrl = project.imageUrl;
    this.bodyText = project.bodyText;
    this.githubUrl = project.githubUrl;
    this.githubUrlLabel = project.githubUrlLabel;

  }
}
