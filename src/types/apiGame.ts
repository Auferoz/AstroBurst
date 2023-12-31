export type APICardResponse = {
    id:               number;
    title:            string;
    released:         string;
    companie:         string;
    poster:           string;
    image:            string;
    genre:            string;
    platform_name:    string;
    platform_icon:    PlatformIcon;
    rating:           string;
    video:            string;
    color:            Color;
    status:           Status;
    any:              number;
    achievements_obt: number;
    achievements_ttl: number;
    hours_mttf:       string;
    hltb_mainyextra:  string;
    hltb_full:        string;
    date_start:       string;
    date_mainstory:   string;
    date_completed:   DateCompleted;
    last_dayplay:     string;
    user_uuid:        string;
}

export enum Color {
    Info = "info",
    Success = "success",
    Warning = "warning",
}

export enum DateCompleted {
    Empty = "-",
    Never = "Never",
}

export enum PlatformIcon {
    FaBrandsFaSteam = "fa-brands fa-steam",
    FaBrandsFaXbox = "fa-brands fa-xbox",
    FaSolidFaComputer = "fa-solid fa-computer",
}

export enum Status {
    Active = "active",
    Inactive = "inactive",
    MainStory = "main_story",
}
