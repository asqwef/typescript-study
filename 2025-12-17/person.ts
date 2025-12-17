let MAX_AGE = 100

import {makeRandomNumber} from '../utils/mrn'
import IPerson from './IPerson'



export default class Person implements IPerson
{
    constructor(public name: string, public age: number) {}
}


export const makePerson = (name: string, age: number = makeRandomNumber()) => ({name, age})
