export default interface Hero{
    id: number,
    name: string,
    available: boolean;
    toggleAvailability: (id: number) => void; 
}