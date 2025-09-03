import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputField from "./InputField"; // default import

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is helper text",
    value: "",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    errorMessage: "Invalid email",
    invalid: true,
    value: "",
  },
};

