import { PagingInfo } from './paging-info';

export class PaginatedList<TItem>{
    public items: TItem[];
    public pagination: PagingInfo;
}