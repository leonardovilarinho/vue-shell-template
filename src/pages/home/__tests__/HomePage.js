/* eslint-disable */
import { shallowMount } from '@vue/test-utils'
import Mock from '@/utils/mock'
import HomePage from '../HomePage.vue'

const mock = new Mock().addML().generate()

describe('HomePage.vue', () => {
  it('has h1 title', () => {
    const wrapper = shallowMount(HomePage, mock)
    expect(wrapper.contains('h1')).toBeTruthy()
  })
})
