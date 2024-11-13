# rn-lightspeed - React Native Layout Library

`rn-lightspeed` is a powerful and flexible React Native library designed to simplify your styling process and enhance responsiveness. It helps you build beautiful layouts with minimal effort, enabling fast and responsive UIs for mobile applications.

> [INFO]
> To ensure that you read the most recent version of the documentation, please refer to the [GitHub repository](https://github.com/kennex666/rn-lightspeed)

## Features:
- Easy-to-use API
- Fully responsive layout handling
- Built-in styles for common use cases
- Flexible design with customizable options

## Installation

To install `rn-lightspeed`, you can use either npm or yarn.

### Using npm:
```bash
npm install rn-lightspeed --save
```

### Using yarn:
```bash
yarn add rn-lightspeed
``` 

## Local Installation (for development):
If you're developing rn-lightspeed locally and want to test it in your project, you can use npm link or yarn link.

1. In your library directory:

```bash
npm link
```

2. In your project directory:

```bash
npm link rn-lightspeed
``` 

## Usage

### Basic Example:
To use `rn-lightspeed` in your project, simply import it and use it like a regular component.

```tsx
import { View, Text } from 'rn-lightspeed';

const App = () => {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      backgroundColor="lightblue"
    >
      <Text size={16} color="red">Hello, world!</Text>
    </View>
  );
};
```

### Customization:
You can customize the Stack component with various props like justifyContent, alignItems, gap, and more. Here's an example with custom styles:

```tsx
<Stack
  flexDirection="row"
  justifyContent="space-between"
  gap={10}
  height={200}
  backgroundColor="gray"
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>
```

## API Documentation

### `Stack` Component (a.k.a View)

The `Stack` (a.k.a `View`) component is a container component that arranges its children in a horizontal or vertical stack. It supports various layout options like justifyContent, alignItems, gap, width, height, and backgroundColor.

For easier use, you can use the `View` component instead of the `Stack` component, especially if you're familiar with React Native.

#### Props:

- `justifyContent`: Defines the alignment of children along the main axis.
  - Type: `string`  
  - Default: `"flex-start"`
  - Possible values: `"center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"`

- `alignItems`: Defines the alignment of children along the cross axis.
  - Type: `string`  
  - Default: `"stretch"`
  - Possible values: `"center" | "flex-start" | "flex-end" | "stretch" | "baseline"`

- `gap`: Defines the space between the children in the stack.
  - Type: `number`
  - Default: `0`

- `width`: Specifies the width of the component.
  - Type: `number | string`
  - Default: `"auto"`

- `height`: Specifies the height of the component.
  - Type: `number | string`
  - Default: `"auto"`

- `backgroundColor`: Specifies the background color of the component.
  - Type: `string`
  - Default: `"transparent"`

#### Example:
```tsx
<Stack
  justifyContent="center"
  alignItems="center"
  width="100%"
  height="100%"
  backgroundColor="lightblue"
>
  <Text>Hello, world!</Text>
</Stack>
```

### `Text` Component

The `Text` component is used to display styled text. You can customize the font size, weight, style, alignment, color, and other text properties.

#### Props:

- `children?`:  
  Type: `React.ReactNode`  
  The content to be rendered inside the `Text` component. This can be a string, number, or other React components.

- `style?`:  
  Type: `TextStyle | TextStyle[]`  
  Custom styles for the text. You can pass a single style object or an array of style objects to apply multiple styles.

- `size?`:  
  Type: `"xxxs" | "xs" | "sm" | "nm" | "md" | "lg" | "xlg" | "xl" | "xxl" | "xxxl" | number`  
  The size of the text. You can use predefined size values or a number to specify the font size in pixels.  

- `bold?`:  
  Type: `boolean`  
  Whether the text should be bold or not. Defaults to `false`.

- `italic?`:  
  Type: `boolean`  
  Whether the text should be italicized. Defaults to `false`.

- `textAlign?`:  
  Type: `"center" | "left" | "right"`  
  The alignment of the text. Possible values are `center`, `left`, or `right`.

- `color?`:  
  Type: `string`  
  The color of the text. You can pass any valid color value, such as hex, rgba, or named colors.

- `underline?`:  
  Type: `boolean`  
  Whether the text should be underlined. Defaults to `false`.

- `value?`:  
  Type: `string`  
  The value of the text. This prop allows you to provide the text content as a string. This is an optional prop if you're passing children directly as text content.

#### Example:

1. Traditional way:
```tsx
<Text
  size="lg"
  bold={true}
  italic={true}
  textAlign="center"
  color="#333"
  underline={true}
>
  Hello, world!
</Text>
```

2. Using `value` prop:
```tsx
<Text
  size="lg"
  bold={true}
  italic={true}
  textAlign="center"
  color="#333"
  underline={true}
  value="Hello, world!"/>
```

## Troubleshooting

### Error: "Unable to resolve 'rn-lightspeed'"

- Ensure that you have installed the library correctly by running `npm install` or `yarn add`.
- Try clearing your cache by running:

```bash
npx react-native start --reset-cache
```

### Error: "Component not rendering correctly"
* Check the props you are passing to ensure they are valid.
* Make sure to pass all required props such as width and height if necessary.

## Contributing

We welcome contributions! If you'd like to contribute to `rn-lightspeed`, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Implement your changes.
4. Run tests (if applicable).
5. Submit a pull request.

Please make sure your code adheres to the style guidelines and that all tests pass before submitting a PR.

## Links

- [GitHub Repository](https://github.com/kennex666/rn-lightspeed)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [npm Package](https://www.npmjs.com/package/rn-lightspeed)
- [Changelog](CHANGELOG.md)