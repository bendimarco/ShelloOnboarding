import { OnboardingStep } from '../types';

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 'hello',
    title: 'Say Hello to Shello',
    description: 'Setup takes approximately ten minutes.',
    contentType: 'video',
    content: '/videos/intro_spin.mp4',
    actionLabel: 'Get Started',
    section: 'Say hello',
    backgroundColor: '#000000'
  },
  {
    id: 'ready',
    title: 'Preparing for Setup',
    description: 'We suggest moving to a desktop computer and grabbing your phone.',
    contentType: 'none',
    content: '/',
    actionLabel: 'I\'m Ready',
    section: 'Getting Started',
    backgroundColor: '#212121'
  },
  {
    id: 'navigation',
    title: 'Using Arrow Keys',
    description: 'You can use your arrow keys to quickly step forward or backwards through this setup.',
    contentType: 'none',
    content: '/',
    actionLabel: 'Next',
    section: 'Getting Started',
    backgroundColor: '#212121'
  },
  {
    id: 'powering-on',
    title: 'Powering on Shello',
    description: 'Power on Shello by pressing the large circular button on the back of the device.',
    contentType: 'video',
    content: '/videos/power_hold.mp4',
    actionLabel: 'Next',
    section: 'Getting Started',
    backgroundColor: '#212121'
  },
  {
    id: 'dead',
    title:'Need a Charge?',
    description: 'If you see a blinking red light, that means Shello needs a charge.',
    contentType: 'video',
    content: '/videos/needs_charge.mp4',
    actionLabel: 'Next',
    section: 'Getting Started',
    backgroundColor: '#270103'
  },
  {
    id: 'charging',
    title: 'Charging Shello',
    description: 'Use the USB-C cord provided to give Shello a charge.',
    contentType: 'video',
    content: '/videos/charging_port.mp4',
    actionLabel: 'Next',
    section: 'Getting Started',
    backgroundColor: '#012719'
  },
  // {
  //   id: 'wireless-charging',
  //   title: 'Wireless charging',
  //   description: 'You can also charge Shello with a wireless charging device!',
  //   contentType: 'image',
  //   content: '/images/intro.png',
  //   actionLabel: 'Ok',
  //   section: '',
  //   backgroundColor: '#00170E'
  // },
  {
    id: 'confirm-charging',
    title: 'Confirm Charging',
    description: 'To confirm Shello is charging, check for a blinking green light on the battery indicator.',
    contentType: 'video',
    content: '/videos/charging.mp4',
    actionLabel: 'Next',
    section: 'Getting Started',
    backgroundColor: '#012719'
  },
  {
    id: 'connecting',
    title: 'Connecting Shello',
    description: 'Now that Shello is charged and ready to go, let’s connect it to your phone.',
    contentType: 'none',
    content: '/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#101010'
  },
  {
    id: 'bluetooth',
    title: 'Bluetooth Connection',
    description: 'Begin pairing Shello via Bluetooth by holding the power button down for 5 seconds.',
    contentType: 'video',
    content: '/videos/bluetooth_hold.mp4',
    actionLabel: 'Next',
    section: 'Connecting Shello',
    backgroundColor: '#010342'
  },
  {
    id: 'pairing-mode',
    title: 'Pairing Indicator',
    description: 'When Shello is looking for your device, you will see its front light blinking blue. To cancel pairing mode, simply press the power button again.',
    contentType: 'video',
    content: '/videos/pairing_mode.mp4',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#000224'
  },
  // {
  //   id: 'manual-connection',
  //   title: 'Manual connection',
  //   description: 'If you can’t connect via bluetooth, you can use the charging chord to manually connect shello to your device of choice',
  //   contentType: 'image',
  //   content: '/images/intro.png',
  //   actionLabel: 'Ok',
  //   section: '',
  //   backgroundColor: '#000224'
  // },
  {
    id: 'confirm-connection',
    title: 'Confirm Connection',
    description: 'You can confirm shello is connected by ______',
    contentType: 'video',
    content: '/videos/bluetooth_light.mp4',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#000224'
  },
  {
    id: 'youre-connected',
    title: 'Shello is Connected!',
    description: 'Continue to walk through your first recording (Approximately five minutes)',
    contentType: 'video',
    content: '/videos/intro_spin.mp4',
    actionLabel: 'Walkthrough',
    section: '',
    backgroundColor: '#000000'
  },
  {
    id: 'app',
    title: 'Download the Shello App',
    description: 'To wear shello, simply fold the band and clip it to your clothing wherever feels comfortable.',
    contentType: 'image',
    content: '/images/app.svg',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  },
  {
    id: 'wearing-shello',
    title: 'Wearing Shello',
    description: 'To wear shello, simply fold the band and clip it to your clothing wherever feels comfortable.',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  },
  {
    id: 'starting-an-interview',
    title: 'Start a New Interview',
    description: '',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  },
  {
    id: 'input-information',
    title: 'Input Information',
    description: '',
    contentType: 'image',
    content: '/images/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  },
  {
    id: 'create-group',
    title: 'Create a New Group',
    description: '',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  }, 
  {
    id: 'start-recording',
    title: 'Start Recording',
    description: '',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'confirm-recording',
    title: 'Confirm Recording',
    description: 'You can confirm Shello is recording via the app and the red recording indicator on Shello itself.',
    contentType: 'image',
    content: '/images/recording_light.png',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'recording-interface',
    title: 'Recording Interface',
    description: 'You can confirm Shello is recording via the app and the red recording indicator on Shello itself.',
    contentType: 'image',
    content: '/images/recording_screen.png',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'recording-times',
    title: 'Recording Length and Battery Left',
    description: 'You can confirm Shello is recording via the app and the red recording indicator on Shello itself.',
    contentType: 'image',
    content: '/images/recording_length.png',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'live-transcription',
    title: 'Live Transcription',
    description: 'Throughout the interview, you can see a live transcription of the conversation to make sure everything is being captured. Say something to test this yourself!',
    contentType: 'image',
    content: '/images/recording_transcript.png',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'bookmark-moment',
    title: 'Bookmark Moments',
    description: 'You can Bookmark important Moments to quickly find them later.',
    contentType: 'image',
    content: '/images/recording_bookmark.png',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'stop-recording',
    title: 'Stop Recording',
    description: 'To stop recording, press the stop recording button.',
    contentType: 'image',
    content: '/images/recording_stop_pause.png',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'confirm-recording-end',
    title: 'Confirm End of Recording',
    description: 'To ensure you don\'t accidentally stop your recording early, confrim your intent to stop the recording.',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: 'Recording an Interview',
    backgroundColor: '#212121'
  }, 
  {
    id: 'summary',
    title: 'Quick Summary',
    description: 'To ensure you don\'t accidentally stop your recording early, confrim your intent to stop the recording.',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  }, 
  {
    id: 'full-transcript',
    title: 'Full Transcript with Notes',
    description: 'To view the full interview’s transcript with notes and annotations, click the view interview button.',
    contentType: 'image',
    content: '/',
    actionLabel: 'Next',
    section: '',
    backgroundColor: '#212121'
  }, 
  

];