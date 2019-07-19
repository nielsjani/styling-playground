import {Component, OnInit} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.scss']
})
export class LodashComponent implements OnInit {

  constructor() {
  }

  //  https://lodash.com/docs/4.17.14
  // https://stackoverflow.com/questions/13789618/differences-between-lodash-and-underscore

  ngOnInit() {
    // this.lodashArray();
    // this.lodashCollection();
    // this.lodashNumber();
    this.lodashString();
  }

  private lodashArray() {
    const chunked: number[][] = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
    console.log(chunked); //  123, 456, 789, 10

    const uncompacted: any[] = [true, false, 0, undefined, '', 15, 'yeah'];
    const compacted = _.compact(uncompacted);
    console.log(compacted); //  true, 15, yeah

    const array: any[] = [1, 2, 3];
    const array2: any[] = [7, 8, 9];
    const array3: any[] = [10];
    const concatted = _.concat(array, 4 as any, 5 as any, 6 as any, array2, array3);
    console.log(concatted);

    const filled = _.fill(Array(5), 'Hello');
    console.log(filled);

    const index = _.findIndex([{name: 'John'}, {name: 'Bob'}, {name: 'Barney'}, {name: 'William'}],
      person => person.name.startsWith('B'));
    console.log(index);

    const lastIndex = _.findLastIndex([{name: 'John'}, {name: 'Bob'}, {name: 'Barney'}, {name: 'William'}],
      person => person.name.startsWith('B'));
    console.log(lastIndex);

    const toFlatten: any[] = ['a0', 'b0', ['c1', 'd1', ['e2', 'f2', ['g3']]]];
    const flattened = _.flatten(toFlatten);
    console.log(flattened);

    const deepflattened = _.flattenDeep(toFlatten);
    console.log(deepflattened);
    //  flattenDepth(arr, nmbr) to flatten up to nmbr levels deep

    // const pairedObj = _.fromPairs(['x', 1], ['y', 2]);
    // console.log(pairedObj);

    console.log(_.intersection([1, 2, 3, 1, 1, 1], [1, 4, 2, 6, 1])); //  1,2

    console.log(_.pull(['Hey', 'my name', 'is', 'remove', 'me', 'John'], 'remove', 'me'));
    const toRemove = ['Hey', 'my name', 'is', 'remove', 'me', 'John'];
    _.remove(toRemove, val => val.startsWith('m'));
    console.log(toRemove);
    console.log(_.without(['Hey', 'my name', 'is', 'remove', 'me', 'John'], 'remove', 'me'));

    const sortIndex = _.sortedIndexBy([{id: 1, name: 'Abe'}, {id: 10, name: 'Abe'}, {id: 20, name: 'Abe'}, {id: 30, name: 'Abe'}],
      {id: 15, name: 'XXX'}, val => val.id);
    console.log(sortIndex);

    const taken = _.take([1, 2, 3, 4, 5], 3);
    console.log(taken);

    const unionized = _.union([5, 10, 2, 2], [8, 3, 5, 6, 2], [5, 5, 5, 5, 2, 99, 99, 88, 77]);
    console.log(unionized);

    const uniqed = _.uniq([5, 10, 2, 2]);
    console.log(uniqed);
  }

  private lodashCollection() {
    const countByRes = _.countBy(['AAAaaa', 'BBbb', 'CCCc'], val => val.length);
    console.log(countByRes);

    const groupByRes = _.groupBy(['AAAaaa', 'BBbb', 'CCCc'], val => val.length);
    console.log(groupByRes);
  }

  private lodashNumber() {
    const clamped = [-15, -8, 2, 35]
      .map(nmbr => _.clamp(nmbr, -10, 10));
    console.log(clamped);

    console.log(_.random(-100, 100));
  }

  private lodashString() {
    console.log(_.camelCase('hey my name is SLIM_SHADY,bitch!'));
    console.log(_.kebabCase('hey my name is SLIM_SHADY,bitch!'));
    console.log(_.snakeCase('hey my name is SLIM_SHADY,bitch!'));
    console.log(_.startCase('hey my name is SLIM_SHADY,bitch!'));
    console.log(_.repeat('hey, listen!\n', 5));

    console.log(_.range(0, 20, 5));
    console.log(_.times(3, x => _.startCase('hey my name is SLIM_SHADY,bitch!' + x)));
  }
}
