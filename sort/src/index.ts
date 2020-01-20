import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/** NUMBERS COLLECTION */
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

/** CHARACTER COLLECTION */
const characterCollection = new CharactersCollection('zadsQq');
characterCollection.sort();
console.log(characterCollection.data);

/** LINKED LIST */
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
