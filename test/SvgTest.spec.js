import {mount, createLocalVue} from 'vue-test-utils';
import SvgTest from '@/components/SvgTest.vue';

let localVue = createLocalVue();

describe('SvgTest.vue', () => {
    let wrapper, mountComponent;

    beforeEach(() => {
        mountComponent = args => mount(SvgTest, args);
    });

    it('finds path by class', () => {
        wrapper = mountComponent();
        expect(wrapper.findAll('.path-class').length).toEqual(1)
    });

    it('finds path by tag', () => {
        wrapper = mountComponent();
        expect(wrapper.findAll('path').length).toEqual(1)
    });

    it('finds path by class when attached to document', () => {
        wrapper = mountComponent({attachToDocument: true});
        expect(wrapper.html()).toContain('path')
    });


});