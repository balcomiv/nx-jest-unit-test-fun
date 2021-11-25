import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SharedUiModule } from '..';
import { NavComponent } from './nav.component';

export default {
  title: 'NavComponent',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedUiModule],
    }),
  ],
} as Meta<NavComponent>;

const Template: Story<NavComponent> = (args: NavComponent) => ({
  component: NavComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
