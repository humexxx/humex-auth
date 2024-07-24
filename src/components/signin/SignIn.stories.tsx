import { StoryFn, Meta } from "@storybook/react";
import SignIn from "./SignIn";
import { SignInForm } from "./SignIn.types";

export default {
  title: "ReactComponentLibrary/SignIn",
  component: SignIn,
} as Meta<typeof SignIn>;

const Template: StoryFn<typeof SignIn> = (args) => <SignIn {...args} />;

export const SignInTest = Template.bind({});
SignInTest.args = {
  handleOnSubmit: (form: SignInForm) =>
    new Promise((resolve) => {
      resolve();
      console.log(form);
    }),
};
