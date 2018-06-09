export class Post {
    Id: string;
    Title: string;
    Content: string;
    ImageSrc: string;
    PublishDate: Date;
    UserId: string;

    constructor(id?: string, title?: string,
        content?: string, imageSrc?: string, publishDate?: Date, userId?: string) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.ImageSrc = imageSrc;
        this.PublishDate = publishDate;
        this.UserId = userId;
        }
}