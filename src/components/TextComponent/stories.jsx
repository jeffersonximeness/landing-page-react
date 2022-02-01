import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sequi eos reiciendis, rerum cum, consequatur distinctio incidunt sed reprehenderit accusamus quis architecto mollitia itaque laborum consectetur
      ducimus vitae modi dolorem dolor nostrum sit dolore provident nesciunt alias temporibus. Iure voluptates, animi odit accusamus nostrum voluptatibus
      culpa, sapiente magni consequatur optio libero excepturi! Illo repudiandae eaque, corrupti cupiditate magnam libero aliquid tempora?`
  },
  argTypes: {
    children: { type: 'string' }
  }
}

export const Template = (args) => {

  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}
