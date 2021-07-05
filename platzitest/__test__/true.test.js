import {isFalse,isNUll,isTrue,isUndefined} from '../true'
 describe('Probar resultado nulo', () => {
     test('should null', () => {
         expect(isNUll()).toBeNull();
     })
     
 });

 describe('Probar true', () => {
     test('should true', () => {
         expect(isTrue()).toBeTruthy();
     })
     
 });
 
 describe('Probar false', () => {
     test('should false', () => {
        expect(isFalse()).toBeFalsy(); 
     })
     
 });

 describe('probar undefined', () => {
    test('should undefinen', () => {
        expect(isUndefined()).toBeUndefined();
    })
     
 });
 
 