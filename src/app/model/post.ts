export class Post{
    UserId: number;
    Id: number;
    Title: string;
    Body: string;
    

    constructor(userId?: number,id?: number, title?: string, body?: string){
        this.UserId = userId;
        this.Id = id;
        this.Title = title;
        this.Body = body;
    }
}