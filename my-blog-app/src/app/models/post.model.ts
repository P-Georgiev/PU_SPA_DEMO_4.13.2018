export class Post {
    Id: string;
    Title: string;
    Description: string;
    ImageSrc: string;
    ArticleUrl: string;
    PublishDate: string;
    UserId: string;

    constructor(id?: string, title?: string,
        description?: string, imageSrc?: string, articleUrl?: string, publishDate?: string, userId?: string) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.ImageSrc = imageSrc;
        this.ArticleUrl = articleUrl;
        this.PublishDate = publishDate;
        this.UserId = userId;
        }
}