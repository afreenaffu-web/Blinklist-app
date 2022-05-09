import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./index";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const header = Template.bind({});
