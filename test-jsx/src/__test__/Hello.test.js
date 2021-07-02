import React from 'react';
import Hello from '../Hola';

import Enzyme ,{shallow,mount}from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
describe('Test React a Hello.jsx',()=>{
    test('Comprobar props',()=>{
        const data = "Hola mundo jest y react";
        const wrapper = mount(
            <Hello hola={data}/>
        );
        const p = wrapper.find('p');
        expect(p.text()).toBe('Hola mundo jest y react')
    })
})