import Person from './person/person'
import IPerson from './person/IPerson'
import Chance from 'chance'
import * as r from 'ramda'

const chance = new Chance()
let persons: IPerson[] = r.range(0, 2)
    .map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)


