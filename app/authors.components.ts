
import {Component} from "angular2/core";
import {AuthorService} from "./author.service";
@Component({
    selector:'authors',
    templateUrl: './app/authors.template.html',
    providers:[AuthorService]
})

export class AuthorsComponents{
    title = "This is Author title.";
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors()
    }

}