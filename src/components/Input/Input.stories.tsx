import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const containerStyle = {
  width: "322px",
  margin: "0 auto",
};

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    inputSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    leftIconName: {
      control: { type: "select" },
      options: ["search", "remove"],
    },
    rightIconName: {
      control: { type: "select" },
      options: ["add", "search", "remove"],
    },
    helperText: { control: "text" }, // افزودن کنترل برای helperText
  },
  decorators: [
    (Story) => (
      <div style={containerStyle}>
        <Story />
      </div>
    ),
  ],
  args: {
    leftIconName: "search",
    rightIconName: "remove",
    helperText: "متن کمکی", // مقدار پیش‌فرض برای helperText
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Small: Story = {
  args: {
    label: "تایتل",
    inputSize: "small",
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

export const Medium: Story = {
  args: {
    label: "تایتل",
    inputSize: "medium",
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

export const Large: Story = {
  args: {
    label: "تایتل",
    inputSize: "large",
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

// export const ErrorState: Story = {
//   args: {
//     label: "تایتل",
//     error: "خطا! لطفاً مقدار معتبر وارد کنید",
//     helperText: "متن کمکی",
//     placeholder: "متن",
//   },
// };

export const ErrorState: Story = {
  args: {
    label: "تایتل",
    error: "متن کمکی",
    // helperText: "متن کمکی",
    placeholder: "متن",
  },
};

export const Disabled: Story = {
  args: {
    label: "تایتل",
    disabled: true,
    placeholder: "متن",
    helperText: "متن کمکی",
  },
};

// ///////////////////////////////
// import { Meta, StoryObj } from "@storybook/react";
// import { Input } from "./Input";

// const containerStyle = {
//   width: "322px",
//   margin: "0 auto",
// };

// const meta: Meta<typeof Input> = {
//   title: "Components/Input",
//   component: Input,
//   argTypes: {
//     inputSize: {
//       control: { type: "select" },
//       options: ["small", "medium", "large"],
//     },
//     disabled: { control: "boolean" },
//     leftIconName: { // اضافه شدن کنترل برای نام آیکون
//       control: { type: "select" },
//       options: ["search", "remove"],
//     },
//     rightIconName: { // اضافه شدن کنترل برای نام آیکون
//       control: { type: "select" },
//       options: ["add", "search", "remove"],
//     },
//   },
//   decorators: [
//     (Story) => (
//       <div style={containerStyle}>
//         <Story />
//       </div>
//     ),
//   ],
//   args: {
//     leftIconName: "search", // تغییر به نام آیکون
//     rightIconName: "remove", // تغییر به نام آیکون
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Input>;

// export const Small: Story = {
//   args: {
//     label: "تایتل",
//     inputSize: "small",
//     placeholder: "متن",
//   },
// };

// export const Medium: Story = {
//   args: {
//     label: "تایتل",
//     inputSize: "medium",
//     placeholder: "متن",
//   },
// };

// export const Large: Story = {
//   args: {
//     label: "تایتل",
//     inputSize: "large",
//     placeholder: "متن",
//   },
// };

// export const ErrorState: Story = {
//   args: {
//     label: "تایتل",
//     error: "متن کمکی",
//     placeholder: "متن",
//   },
// };

// export const Disabled: Story = {
//   args: {
//     label: "تایتل",
//     disabled: true,
//     placeholder: "متن",
//   },
// };

// /////////////////////////////////

// import { Meta, StoryObj } from "@storybook/react";
// import { Input } from "./Input";
// import { Search } from "../Icons/Search";
// import { Remove } from "../Icons/Remove";

// const containerStyle = {
//   width: "322px",
//   margin: "0 auto",
// };

// const meta: Meta<typeof Input> = {
//   title: "Components/Input",
//   component: Input,
//   argTypes: {
//     inputSize: {
//       control: { type: "select" },
//       options: ["small", "medium", "large"],
//     },
//     disabled: { control: "boolean" },
//   },
//   decorators: [
//     (Story) => (
//       <div style={containerStyle}>
//         <Story />
//       </div>
//     ),
//   ],
//   args: {
//     leftIcon: <Search />,
//     rightIcon: <Remove />,
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Input>;

// // export const Enable: Story = {
// //   args: {
// //     placeholder: "Placeholder text",
// //   },
// // };

// export const Small: Story = {
//   args: {
//     label: "تایتل",
//     inputSize: "small",
//     placeholder: "متن",
//   },
// };

// export const Medium: Story = {
//   args: {
//     label: "تایتل",
//     inputSize: "medium",
//     placeholder: "متن",
//   },
// };

// export const Large: Story = {
//   args: {
//     label: "تایتل",
//     inputSize: "large",
//     placeholder: "متن",
//   },
// };

// // export const WithLabel: Story = {
// //   args: {
// //     label: "Username",
// //     placeholder: "Enter your username",
// //   },
// // };

// export const ErrorState: Story = {
//   args: {
//     label: "تایتل",
//     error: "متن کمکی",
//     placeholder: "متن",
//   },
// };

// export const Disabled: Story = {
//   args: {
//     label: "تایتل",
//     disabled: true,
//     placeholder: "متن",
//   },
// };

// /////////////////////////////////////////
// import React from "react";
// import { Meta, StoryObj } from "@storybook/react";
// import { Input } from "./Input";
// import { Search } from "../Icons/Search";
// import { Remove } from "../Icons/Remove";

// const meta: Meta<typeof Input> = {
//   title: "Components/Input",
//   component: Input,
//   // tags: ["autodocs"],
//   argTypes: {
//     inputSize: {
//       control: { type: "select" },
//       options: ["small", "medium", "large"],
//     },
//     disabled: { control: "boolean" },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Input>;

// export const Default: Story = {
//   args: {
//     placeholder: "Placeholder text",
//   },
// };

// export const Small: Story = {
//   args: {
//     inputSize: "small",
//     placeholder: "Small input",
//   },
// };

// export const Medium: Story = {
//   args: {
//     inputSize: "medium",
//     placeholder: "Medium input",
//   },
// };

// export const Large: Story = {
//   args: {
//     inputSize: "large",
//     placeholder: "Large input",
//   },
// };

// export const WithLabel: Story = {
//   args: {
//     label: "Username",
//     placeholder: "Enter your username",
//   },
// };

// export const WithIcons: Story = {
//   args: {
//     leftIcon: <Remove />,
//     rightIcon: <Search />,
//     placeholder: "Search and remove...",
//   },
// };

// export const ErrorState: Story = {
//   args: {
//     label: "Email",
//     error: "Invalid email address",
//     placeholder: "email@example.com",
//   },
// };

// export const Disabled: Story = {
//   args: {
//     label: "Disabled Field",
//     disabled: true,
//     placeholder: "Can't edit this",
//   },
// };
