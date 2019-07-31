import counter from './counter.vue'
import { mount } from '@vue/test-utils'

describe('counter.vue', () => {
  test('setup correctly', () => {
    expect(true).toBe(true)
  })
})

describe('counter.vue', () => {
  test('Increment the counter value when it is clicked', () => {
    const wrapper = mount(counter)
    expect(wrapper.text()).toContain('counter: 0 Increment')
    wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('counter: 1 Increment')
  })
})

