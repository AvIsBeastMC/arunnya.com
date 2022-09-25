export default interface PostInterface {
    title: string;
    description: string;
    content: string;
    date: string;
    category: string;
}

export interface FirebasePostInterface extends PostInterface {
    id: string;
}