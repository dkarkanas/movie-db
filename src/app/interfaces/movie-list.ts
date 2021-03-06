export interface Result {
    id: number;
    title: string;
}

export interface MovieList {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}

