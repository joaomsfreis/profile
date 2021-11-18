import Avatar from '@/components/Avatar.vue';
import { mount } from '@vue/test-utils';

describe('Avatar.vue', () => {
    test('Existe o avatar!', () => {
        const wrapper = mount(Avatar);
        const avatar = wrapper.find('.avatar');

        expect(avatar.exists()).toBe(true);
    });
})