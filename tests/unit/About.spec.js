import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

describe('About.vue', () => {
    test('Exite o componente!', () => {
        const wrapper = shallowMount(About);
    
        expect(wrapper.exists()).toBe(true);
    });
})

describe('About.vue - metodo diffBetweenDates', () => {
    
    test('Mesmo ano!', () => {
        const wrapper = shallowMount(About);

        const start = new Date(2020, 0, 10);
        const end = new Date(2020, 1, 10);

        const received = wrapper.vm.diffBetweenDates(start, end);

        const expected = {
            months: 1,
            years: 0
        }
        
        expect(received).toEqual(expected);
    });

    test('Anos diferentes sem completar 1 ano!', () => {
        const wrapper = shallowMount(About);

        const start = new Date(2020, 6, 10);
        const end = new Date(2021, 1, 10);

        const received = wrapper.vm.diffBetweenDates(start, end);

        const expected = {
            months: 7,
            years: 0
        }
        
        expect(received).toEqual(expected);
    });

    test('Anos diferentes completando 1 ano!', () => {
        const wrapper = shallowMount(About);

        const start = new Date(2020, 6, 10);
        const end = new Date(2021, 7, 10);

        const received = wrapper.vm.diffBetweenDates(start, end);

        const expected = {
            months: 1,
            years: 1
        }
        
        expect(received).toEqual(expected);
    });

    test('3 anos diferentes completando sem completar mais de 2 ano!', () => {
        const wrapper = shallowMount(About);

        const start = new Date(2019, 6, 10);
        const end = new Date(2021, 1, 10);

        const received = wrapper.vm.diffBetweenDates(start, end);

        const expected = {
            months: 7,
            years: 2
        }
        
        expect(received).toEqual(expected);
    });

    

    test('Não completou o mês todo!', () => {
        const wrapper = shallowMount(About);

        const start = new Date(2019, 6, 10);
        const end = new Date(2021, 1, 9);

        const received = wrapper.vm.diffBetweenDates(start, end);

        const expected = {
            months: 6,
            years: 2
        }
        
        expect(received).toEqual(expected);
    });

    test('Completou o mês todo!', () => {
        const wrapper = shallowMount(About);

        const start = new Date(2019, 6, 10);
        const end = new Date(2021, 1, 11);

        const received = wrapper.vm.diffBetweenDates(start, end);

        const expected = {
            months: 7,
            years: 2
        }
        
        expect(received).toEqual(expected);
    });
})