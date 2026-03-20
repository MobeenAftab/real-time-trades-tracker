export interface UserProfile {
    id: number;
    firstName: string;
    middleName?: string | null;
    lastName: string;
    name: string;
    city: string;
    photo: string;
}
