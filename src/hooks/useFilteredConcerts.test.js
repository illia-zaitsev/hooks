import React from 'react';
import { shallow } from 'enzyme';
import useFilteredConcerts from './useFilteredConcerts';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from "redux";
import {reducer} from "../reducer/reducer";

function HookWrapper(props, context) {
    console.log('inside  shallow', context);
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}
HookWrapper.contextTypes = {
    StoreContext: 'any',
};

configure({ adapter: new Adapter() });

describe('useFilteredConcerts', () => {

    // it('should render', () => {
    //     const wrapper = shallow(<HookWrapper />);
    //     expect(wrapper.exists()).toBeTruthy();
    // });
    //
    // it('should set empty array', () => {
    //     const wrapper = shallow(<HookWrapper hook={() => useFilteredConcerts()} />);
    //     const { hook } = wrapper.find('div').props();
    //     const arr = hook;
    //     expect(arr).toEqual([]);
    // });


    it('should set the right array', () => {
        // const context = { name: 'foo' };
        const StoreContext = React.createContext('');
        // const context = createStore(reducer);


        let wrapper = shallow(<HookWrapper hook={() => useFilteredConcerts()} />, { StoreContext });
        // wrapper.setContext({ store: {concert: {data: [1, 2, 3]} }});

        const { hook } = wrapper.find('div').props();
        console.log('inside test', hook);
        const arr = hook;
        expect(arr).toEqual([1,2]);
    });

    /*
    it('should set the right isValid value', () => {
        let wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

        let { hook } = wrapper.find('div').props();
        let [val, onChange, isValid] = hook;
        expect(val).toEqual('marco');
        expect(isValid).toEqual(true);

        onChange({ target: { value: 'polo' } });

        ({ hook } = wrapper.find('div').props());
        [val, onChange, isValid] = hook;
        expect(val).toEqual('polo');
        expect(isValid).toEqual(true);

        onChange({ target: { value: '' } });

        ({ hook } = wrapper.find('div').props());
        [val, onChange, isValid] = hook;
        expect(val).toEqual('');
        expect(isValid).toEqual(false);
    });
    */
});
