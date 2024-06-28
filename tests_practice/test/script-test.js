import { assert } from 'chai';
import {pow, sum} from '../script.js';


describe('Script', function (){
    describe('pow()', function (){
        it('Raises the a to the power b', function (){
            assert.equal(pow(2,3), 8);
        });

        it('Zero remains the same', function (){
            assert.equal(pow(0,2), 0);
        });

        it('Returns a number', function (){
            assert.typeOf(pow(2, 3), "Number");
        });
    });

    describe('sum()', function (){
        it('Returns a sum of arguments', function (){
            assert.equal(sum(2, 3), 5);
        });

        it('Returns a number', function (){
            assert.typeOf(sum(2,3), "Number");
        });

        it('Result should be above 5', function (){
            assert.isAbove(sum(3,3), 5);
        });
    });
});
