export interface IRegister {
    name: string;
    surname: string;
    email: string;
    address: IAddress;
}

interface IAddress {
    country: string;
    city: string;
    house: string;
    code: string;
}