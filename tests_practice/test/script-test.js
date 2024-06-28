import { assert } from 'chai';
import {pow} from '../script.js';

describe('Script', function (){
    it('Raises the a to the power b', function (){
        assert.equal(pow(2,3), 8);
    });

    it('Zero remains the same', function (){
        assert.equal(pow(0,5), 0);
    })
});
