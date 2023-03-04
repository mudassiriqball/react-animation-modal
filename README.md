# Animation Modal React

Customizable react modal with multiple animations.
&nbsp;

## Demo

<https://react-animation-modal.netlify.app/>

## Installation

To install, you can use [npm](https://www.npmjs.com/ "npm") or [yarn](https://classic.yarnpkg.com/lang/en/ "yarn"):

```sh
npm install --save animation-modal-react
```

OR

```sh
yarn add animation-modal-react
```

&nbsp;

## Usage

```javascript
import React, { useState } from 'react';
import AnimationModal from 'animation-modal-react'

const App = () => {
   const [visible, setVisible] = useState(false);

   return (
      <div>
         <button onClick={() => setVisible(true)}>Show Modal</button>

         <AnimationModal visible={visible} onHide={() => setVisible(false)}>
            <div>Modal Content</div>
         </AnimationModal>
      </div>
   );
};

export default App;
```

```javascript
import React, { useState } from 'react';
import AnimationModal from 'animation-modal-react'

const App = () => {
   const [visible, setVisible] = useState(false);

   return (
      <div>
         <button onClick={() => setVisible(true)}>Show Modal</button>

         <AnimationModal
            visible={visible}
            onHide={() => setVisible(false)}
            size="fullScreen"
            pattern="wave_in_left"
            closeIcon={<MyIcon />}
            overlayClassName="my-overlay-className"
            contentClassName="my-content-className"
            closeClassName="my-close-icon-className"
         >
            <div>Modal Content</div>
         </AnimationModal>
      </div>
   );
};

export default App;
```

&nbsp;

## Accepted Props

| Name | Type  | Description  |
| ------------ | ------------ | ------------ |
| visible (required)  | `boolean`  | Set the visibility of the Modal.  |
| onHide  |  `callback`  | A callback fired when either the overlay is clicked. |
| onOverlayClick  |  `callback`  | A callback fired when the overlay, if specified, is clicked. |
| closeOnOverlayClick (default `true`) | `boolean`  | A boolean to close modal on overlay click. |
| animation  (default `fade_in`) | enum: `bounce_in_down, bounce_in_left, bounce_in_right, bounce_in_up, bounce_in, bounce, fade_in_down, fade_in_down, fade_in_left, fade_in_right, fade_in_up, fade_in, flip_in_x, flip_in_y, flip, rotate_in_down_left, rotate_in_down_right, rotate_in_up_left, rotate_in_up_right, rotate_in, slide_in_down, slide_in_left, slide_in_right, slide_in_up, zoom_in_down, zoom_in_left, zoom_in_right, zoom_in_up, zoom_in, wave_in_down, wave_in_left, wave_in_right, wave_in_up, roll_in_down, roll_in_left, roll_in_right, roll_in_up, roll, flash, hinge, jack_in_box, jello, pulse, rubber_band, shake, swing, vibrate, wobble`  | An enum to control animations for the modal. |
| closeIcon  |  `ReactElement`  | Replace the default Close Icon.  |
| size (default `md`) | enum/string: `sm, md, lg, xl, fullScreen, (number)px, (number)%`  | An enum to control the modal size. |
| overlayClassName | `string`  | To replace/override the default overlay styles.  |
| contentClassName | `string`  | To replace/override the default content styles.  |
| closeClassName | `string`  | To replace/override the default close icon styles.  |

&nbsp;
