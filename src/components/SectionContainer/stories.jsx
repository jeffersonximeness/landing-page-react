import { SectionContainer } from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,

  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aspernatur obcaecati laudantium inventore quidem quae harum consequuntur nam,
          officia ipsam alias mollitia deleniti. Nihil numquam eius quaerat deleniti ut magnam repudiandae culpa fugiat molestiae cum cupiditate dicta hic nobis
          ea odio totam officia sequi voluptatem reiciendis eum quia, repellat quod mollitia assumenda? Rem optio at nemo accusantium dolores quisquam tempore.
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: '' }
  }
}

export const Template = (args) => {

  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}
