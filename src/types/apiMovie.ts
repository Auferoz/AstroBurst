export type APIMoviesResponse = {
    id:        number;
    title:     string;
    released:  string;
    runtime:   string;
    genre:     string;
    rating:    number;
    watch:     Watch;
    view:      string;
    poster:    string;
    image:     string;
    user_uuid: string;
}

export enum Watch {
    Cine = "Cine",
    HBOMax = "HBO Max",
    Hbo = "HBO",
    Netflix = "Netflix",
    PrimeVideo = "Prime Video",
    Star = "Star+",
    Tv = "TV",
}
