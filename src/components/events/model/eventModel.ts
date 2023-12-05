export interface SportEvent {
    id: number;
    name: string;
    venueId: number;
    location: Location;
    city: string;
    street: string;
    creatorUserId: number;
    creatorUsername: string;
    playersId: number[];
    activityType: string;
    price: number;
    date: string;
}

export interface Location {
    lat: number;
    lng: number;
}