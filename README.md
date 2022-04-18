# Tailwind Classname Cleanup

A set of utility functions for creating component librarys with TailwindCSS.

## The Goal

The purpose for this project is to allow component library authors the ability to create create component
libraries with TailwindCSS while allowing the consumers of the component library the ability to use Tailwind to add more styles to those components.

### How to use

Run `yarn add twClassnames`

To use in code, add the `twClassnames` function into your `className` field.

#### React

`button.js`

```javascript
import twClassnames from 'twClassnames'

export default Button = ({ className }) => {
    return (
        <button className={twClassName('br-red-400', className)}>
            Click Me
        </buutton>
    )
}
```

`form.js`

```javascript

import Button from "./button"

export default Form = () => {
    return (
        <form>
            <Button className={"border broder-gray-400 bg-white"}>
        </form>
    )
}

```

### How to Contribute

Open an Issue and PR with use cases and test cases.
