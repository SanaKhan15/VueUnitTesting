import { mount } from '@vue/test-utils'
import UserDetail from './UserEdit.vue'

describe('UserDetail.vue', () => {
  test('setup correctly', () => {
    expect(true).toBe(true)
  })
})
describe('UserDetail.vue', () => {
  test('check props', () => {
    const wrapper = mount(UserDetail, {
      propsData: {
        heading: "First Card"
      }
    })
    expect(wrapper.props().heading).toBe('First Card')
    expect(wrapper.props('heading')).toBe('First Card')
  })
})
describe('UserDetail.vue', () => {
  test('check props', () => {
    const wrapper = mount(UserDetail, {
      propsData: {
        btnType: "add"
      }
    })
    expect(wrapper.props().btnType).toBe('add')
    expect(wrapper.props('btnType')).toBe('add')
  })
})
describe('UserDetail.vue', () => {
  test('check props', () => {
    const wrapper = mount(UserDetail, {
      propsData: {
        btnType: "list"
      }
    })
    expect(wrapper.props().btnType).toBe('list')
    expect(wrapper.props('btnType')).toBe('list')
  })
})