import {Tag} from "./Tag";

export interface PostMetadata{
    title: string;
    date: string;
    subtitle: string;
    autor: string,
    cover_image: string;
    slug: string;
    tags: Tag[];
}