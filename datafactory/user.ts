import { faker } from '@faker-js/faker/locale/en';

export interface User {
    name: string;
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
    newsletter: boolean;
    offers: boolean;
    firstname: string;
    lastname: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
}

export class User {
    static createNewUser(overrides?: Partial<User>): User {
        return {
            name: faker.person.firstName(),
            email: faker.internet.email({ provider: 'test.demo.com'}),
            password: faker.internet.password(),
            day: '16',
            month: 'November',
            year: '1990',
            newsletter: faker.datatype.boolean({ probability: 0.3 }),
            offers: faker.datatype.boolean({ probability: 0.3 }),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: 'New Zealand',
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode('####'),
            mobile: faker.phone.number(),
            ...overrides
        }
    }
}