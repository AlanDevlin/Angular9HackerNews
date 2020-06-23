export class NewsItem{
    id: number;
    deleted: boolean;
    type: string;
    by: string;
    time: Date;
    text: string;
    dead: boolean;
    parent: string;
    poll: string;
    kids: number[];
    url: string;
    score: number;
    title: string;
    parts: string[];
    descendants: number;
}