export interface SportEvent {
    id: number;
    name: string;
    price: number;
    date: string;
    city: string;
    street: string;
    discipline: string;
    location: Location;
}

export interface Location {
    lat: number;
    lng: number;
}