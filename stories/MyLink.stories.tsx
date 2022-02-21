import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { MyLink, MyLinkProps } from '../components/MyLink'

export default {
  title: 'Example/MyLink',
  component: MyLink
} as Meta

const Template: Story<MyLinkProps> = args => <MyLink {...args} />

export const MyLinkTest = Template.bind({})
MyLinkTest.args = {
  title: 'My Link'
}
