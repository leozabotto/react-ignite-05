import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: (
      <>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa assumenda illum impedit asperiores nemo perspiciatis esse earum excepturi, similique voluptatibus dolores. Delectus corporis pariatur voluptate eveniet dolorum dignissimos explicabo necessitatibus.
      </>
    )
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}
