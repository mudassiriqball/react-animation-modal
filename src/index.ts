export { AnimationModal } from './AnimationModal'

export interface AnimationModalProps {
   children?: React.ReactElement;

   /**
    * Set the visibility of the Modal
    */
   visible: boolean;

   /**
    * A callback fired when either the overlay/closeIcon is clicked.
    *
    * The `onHide` callback only signals intent from the Modal,
    * you must actually set the `show` prop to `false` for the Modal to close.
    */
   onHide?: () => void;

   /**
   * A callback fired when the overlay, if specified, is clicked.
   */
   onOverlayClick?: (e: React.SyntheticEvent) => void;

   /**
   * A boolean to close modal on overlay click.
   */
   closeOnOverlayClick?: boolean;

   /**
    * An enum to control animations for the modal.
    */
   animation?: AnimationType;

   /**
    * Replace the default Close Icon.
    */
   closeIcon?: React.ReactElement;

   /**
    * An enum to control the modal size.
    */
   size?: Size;

   /**
    * To replace/override the default styles.
    */
   overlayClassName?: string;
   contentClassName?: string;
   closeClassName?: string;
};

export type AnimationType =
   // bounce
   | 'bounce_in_down' | 'bounce_in_left' | 'bounce_in_right' | 'bounce_in_up' | 'bounce_in' | 'bounce'
   // fade
   | 'fade_in_down' | 'fade_in_down' | 'fade_in_left' | 'fade_in_right' | 'fade_in_up' | 'fade_in'
   // flip
   | 'flip_in_x' | 'flip_in_y' | 'flip'
   // rotate
   | 'rotate_in_down_left' | 'rotate_in_down_right' | 'rotate_in_up_left' | 'rotate_in_up_right' | 'rotate_in'
   // slide
   | 'slide_in_down' | 'slide_in_left' | 'slide_in_right' | 'slide_in_up'
   // zoom
   | 'zoom_in_down' | 'zoom_in_left' | 'zoom_in_right' | 'zoom_in_up' | 'zoom_in'
   // wave
   | 'wave_in_down' | 'wave_in_left' | 'wave_in_right' | 'wave_in_up'
   // roll
   | 'roll_in_down' | 'roll_in_left' | 'roll_in_right' | 'roll_in_up' | 'roll'
   // others
   | 'flash' | 'hinge' | 'jack_in_box' | 'jello' | 'pulse' | 'rubber_band' | 'shake' | 'swing' | 'vibrate' | 'wobble';

export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fullScreen' | `${number}${SizeUnit}`;

type SizeUnit = 'px' | '%';
