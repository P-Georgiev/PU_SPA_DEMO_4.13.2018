export class Hero{
    Id: number;
    Name: string;

    constructor(id?: number, name?: string, createdOn?: Date){
        this.Id = id;
        this.Name = name;
    }
}