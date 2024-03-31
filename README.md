# Butterfly Forms

## Overview
Butterfly Forms is a Vue.js project designed to facilitate the creation of dynamic and customizable input forms with various features such as floating labels, icon support, validation messages, and more. The project utilizes Vue.js along with other libraries like Vue Multiselect, Jalali Moment, and Vue3 Persian DateTime Picker to provide a rich user experience in form interactions.

## Project Structure
The project consists of Vue components organized to build customizable input fields. Key components include:
- **Input.vue**: A versatile input component capable of handling text inputs, text areas, select dropdowns, and date pickers.
- **DatePicker.vue**: A custom date picker component based on Vue3 Persian DateTime Picker.
- **VueMultiselect**: An enhanced select dropdown component for Vue.js.

## Features
- **Dynamic Input Types**: The Input component supports various input types such as text, number, password, email, and textarea, with automatic formatting for specific types like price and percent.
- **Floating Labels**: Input fields feature floating labels that transition smoothly when focused or filled.
- **Icon Support**: Icons can be added before or after the input fields to provide visual cues.
- **Validation Messages**: Customizable error messages can be displayed below input fields based on validation rules.
- **Responsive Design**: The components are designed to be responsive and compatible with different screen sizes.
- **Date Handling**: Date inputs are supported with a custom date picker component, allowing users to select dates easily.
- **Customization Options**: Users can customize various aspects of the input fields, including labels, placeholders, icons, and alignment.

## Usage
To utilize Butterfly Forms in your Vue.js project, follow these steps:
1. Install the required dependencies: Vue Multiselect, Jalali Moment, and Vue3 Persian DateTime Picker.
2. Import the necessary components into your project.
3. Use the Input component with desired configurations to create input fields within your forms.

## Example
Below is an example of how to use Butterfly Forms to create a simple form:
```vue
<template>
  <div>
    <Input
        type="input:text"
        outline
        float
        cols="6"
        label="Full Name"
    />
    <!-- Other Input components for different fields -->
  </div>
</template>

<script setup>
import Input from "@/views/components/forms/Input.vue";
</script>
```

### Props Table
| Name             | Type      | Example                           | Description                                                                                                                                      |
|------------------|-----------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `attrs`          | Object    | `{ autofocus: true }`            | Additional attributes to be applied to the input element.                                                                                        |
| `modelValue`     | Any       | `'John Doe'`                     | The value of the input field, used for two-way binding.                                                                                          |
| `message`        | String    | `'Please enter a valid email.'` | A message to be displayed below the input field for validation or informational purposes.                                                       |
| `messageType`    | String    | `'error'`                        | Type of message, such as 'error' or 'info'.                                                                                                      |
| `cols`           | String    | `'6'`                             | Column size for grid layout.                                                                                                                     |
| `outline`        | Boolean   | `true`                            | Boolean indicating whether to use outline styling for the input field.                                                                           |
| `float`          | Boolean   | `false`                           | Boolean indicating whether to use floating labels.                                                                                               |
| `align`          | String    | `'left'`                          | Alignment of the input field content (e.g., 'left', 'center', 'right').                                                                         |
| `alignIcon`      | String    | `'right'`                         | Alignment of the input field icon (e.g., 'left', 'right').                                                                                      |
| `padding`        | String    | `'p-2'`                           | Additional padding classes for styling.                                                                                                          |
| `icony`          | String    | `'fas fa-user'`                  | Icon class name for the input field.                                                                                                             |
| `icon`           | String    | `'mdi mdi-email'`                | Icon class name for the input field (Material Design Icons).                                                                                     |
| `imgIcon`        | String    | `'https://example.com/icon.png'`| URL of an image to be displayed as an icon.                                                                                                      |
| `gap`            | String    | `'2'`                             | Gap size for grid layout.                                                                                                                        |
| `label`          | String    | `'Email Address'`                | Label text for the input field.                                                                                                                  |
| `type`           | String    | `'input:email'`                  | Type of input field (e.g., 'input', 'textarea', 'select', 'date').                                                                              |
| `placeholder`    | String    | `'Enter your email address'`     | Placeholder text for the input field.                                                                                                            |
| `selectOptions`  | Object    | `{ key: 'id', label: 'name' }`   | Additional options for the select input type.                                                                                                    |
| `disabled`       | Boolean   | `true`                            | Boolean indicating whether the input field is disabled.                                                                                          |
| `classList`      | Array     | `['bg-primary', 'text-white']`   | Array of additional CSS classes for styling.                                                                                                     |
| `value`          | String    | `'25'`                            | Value of the input field.                                                                                                                        |
| `maxDate`        | String    | `'1403/01/01'`                   | Maximum date allowed (Persian date format).                                                                                                      |
| `minDate`        | String    | `'1400/01/01'`                   | Minimum date allowed (Persian date format).                                                                                                      |
| `keyId`          | String    | `'email-input'`                  | Unique identifier for the input field.                                                                                                           |
| `direction`      | String    | `'rtl'`                           | Text direction for the input field content (e.g., 'ltr', 'rtl').                                                                                 |

### Events Table
| Name                     | Type       | Example                         | Description                                                                                                                     |
|--------------------------|------------|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `update:modelValue`      | Function   | `@update:modelValue="handleInputChange"` | Event emitted when the input value changes.                                                                                    |



### Contributing
Contributions to Butterfly Forms are welcome! If you have any suggestions, bug fixes, or feature requests, feel free to open an issue or submit a pull request on the project's GitHub repository.

### License
This project is licensed under the MIT License, which allows for free usage, modification, and distribution.
 
#### About Me

Connect with me on [LinkedIn](https://www.linkedin.com/in/esmaeilbahranifard/) | Follow me on [GitHub](https://github.com/esmaeilbahrani/)

