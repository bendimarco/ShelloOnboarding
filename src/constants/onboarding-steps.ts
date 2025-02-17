import { OnboardingStep } from '../types';

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 'hello',
    title: 'Say Hello to Shello',
    description: 'Setup takes approximately ten minutes.',
    contentType: 'video',
    content: '/videos/intro_spin.mp4',
    actionLabel: 'Get Started',
    section: 'Shello Onboarding',
    backgroundColor: '#000000',
    faq: false
  },
  {
    id: 'ready',
    title: 'Preparing for Setup',
    description: 'We suggest moving to a desktop computer and grabbing your phone.',
    contentType: 'none',
    content: '/',
    actionLabel: 'I\'m Ready',
    section: 'Getting Started',
    backgroundColor: '#212121',
    faq: false
  },
  {
    id: 'navigation',
    title: 'Using Arrow Keys',
    description: 'You can use your arrow keys to quickly move forward or backwards through this setup.',
    contentType: 'none',
    content: '/',
    actionLabel: 'Continue',
    section: 'Getting Started',
    backgroundColor: '#212121',
    faq: false
  },
  {
    id: 'powering-on',
    title: 'Powering on Shello',
    description: 'Power on Shello by folding up the band and pressing the large circular button on the back of the device.',
    contentType: 'video',
    content: '/videos/power_hold.mp4',
    actionLabel: 'Continue',
    section: 'Getting Started',
    backgroundColor: '#212121',
    faq: true
  },
  {
    id: 'dead',
    title:'Need a Charge?',
    description: 'If you see a blinking red light, that means Shello needs a charge.',
    contentType: 'video',
    content: '/videos/needs_charge.mp4',
    actionLabel: 'Continue',
    section: 'Getting Started',
    backgroundColor: '#270103',
    faq: true
  },
  {
    id: 'charging',
    title: 'Charging Shello',
    description: 'You can use the USB-C cord provided to give Shello a charge.',
    contentType: 'video',
    content: '/videos/charging_port.mp4',
    actionLabel: 'Continue',
    section: 'Getting Started',
    backgroundColor: '#012719',
    faq: true
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
    actionLabel: 'Continue',
    section: 'Getting Started',
    backgroundColor: '#012719',
    faq: true
  },
  {
    id: 'connecting',
    title: 'Connecting Shello',
    description: 'Now that Shello is charged and ready to go, let’s connect it to your phone.',
    contentType: 'none',
    content: '/',
    actionLabel: 'Continue',
    section: '',
    backgroundColor: '#101010',
    faq: false
  },
  {
    id: 'bluetooth',
    title: 'Bluetooth Connection',
    description: 'Begin pairing Shello via Bluetooth by holding the power button down for five seconds.',
    contentType: 'video',
    content: '/videos/bluetooth_hold.mp4',
    actionLabel: 'Continue',
    section: 'Connecting Shello',
    backgroundColor: '#010342',
    faq: true
  },
  {
    id: 'pairing-mode',
    title: 'Pairing Indicator',
    description: 'When Shello is looking for your device, you will see its front light blinking blue. To cancel pairing mode, simply press the power button again.',
    contentType: 'video',
    content: '/videos/pairing_mode.mp4',
    actionLabel: 'Continue',
    section: 'Connecting Shello',
    backgroundColor: '#000224',
    faq: true
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
    description: 'You can confirm shello is connected via your device\'s Bluetooth settings.',
    contentType: 'image',
    content: '/images/confirm_bluetooth.png',
    actionLabel: 'Continue',
    section: 'Connecting Shello',
    backgroundColor: '#000224',
    faq: true
  },
  {
    id: 'youre-connected',
    title: 'Shello is Connected!',
    description: 'Continue to walk through your first recording. (Approximately five minutes)',
    contentType: 'video',
    content: '/videos/intro_spin.mp4',
    actionLabel: 'Walkthrough',
    section: '',
    backgroundColor: '#000000',
    faq: false
  },
  {
    id: 'app',
    title: 'Download the Shello App',
    description: 'Scan the QR code and download the Shello app.',
    contentType: 'image',
    content: '/images/app.svg',
    actionLabel: 'Continue',
    section: 'Preparing to Record',
    backgroundColor: '#212121',
    faq: true
  },
  {
    id: 'wearing-shello',
    title: 'Wearing Shello',
    description: 'To wear Shello, simply fold down the band and clip it to your clothing wherever feels comfortable.',
    contentType: 'image',
    content: '/images/wearing_shello.png',
    actionLabel: 'Continue',
    section: 'Preparing to Record',
    backgroundColor: '#212121',
    faq: true
  },
  {
    id: 'starting-an-interview',
    title: 'Start a New Interview',
    description: 'To start a new interview, press the white plus button at the bottom of the screen.',
    contentType: 'image',
    content: '/images/new_interview_btn.png',
    actionLabel: 'Continue',
    section: 'Preparing to Record',
    backgroundColor: '#212121',
    faq: true
  },
  {
    id: 'input-information',
    title: 'Input Information',
    description: 'Input as much or as little information about your interview as you would like.',
    contentType: 'image',
    content: '/images/input_info.png',
    actionLabel: 'Continue',
    section: 'Preparing to Record',
    backgroundColor: '#212121',
    faq: true
  },
  // {
  //   id: 'create-group',
  //   title: 'Create a New Group',
  //   description: '',
  //   contentType: 'image',
  //   content: '/',
  //   actionLabel: 'Next',
  //   section: 'Preparing to Record',
  //   backgroundColor: '#212121'
  // }, 
  {
    id: 'start-recording',
    title: 'Start Recording',
    description: 'To start recording, press the start interview button on the app, or press the record button on the side of Shello.',
    contentType: 'video',
    content: '/videos/start_recording.mp4',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  // {
  //   id: 'recording-interface',
  //   title: 'Recording Interface',
  //   description: 'You can confirm Shello is recording via the app and the red recording indicator on Shello itself.',
  //   contentType: 'image',
  //   content: '/images/recording_screen.png',
  //   actionLabel: 'Next',
  //   section: 'Recording an Interview',
  //   backgroundColor: '#212121'
  // }, 
  {
    id: 'confirm-recording',
    title: 'Confirm Recording',
    description: 'You can confirm Shello is recording via the app and the red recording indicator on Shello itself.',
    contentType: 'image',
    content: '/images/recording_light.png',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'recording-times',
    title: 'Recording Length and Battery',
    description: 'You can see the current length of recording in red, and Shello\'s remaining battery time in green.',
    contentType: 'image',
    content: '/images/recording_length.png',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'live-transcription',
    title: 'Live Transcription',
    description: 'Throughout the interview, you can see a live transcription of the conversation to make sure everything is being captured. Say something to test this yourself.',
    contentType: 'image',
    content: '/images/recording_transcript.png',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'bookmark-moment',
    title: 'Bookmark Moments',
    description: 'You can bookmark important moments to quickly find them later in the full transcript either via the button on the app or the bookmark button on Shello.',
    contentType: 'video',
    content: '/videos/recording_bookmark.mp4',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'stop-recording',
    title: 'Pause and Stop Recording',
    description: 'You can pause a recording at any time via the pause button, and when you are finished, press the stop recording button.',
    contentType: 'image',
    content: '/images/recording_stop_pause.png',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'confirm-recording-end',
    title: 'Confirm End of Recording',
    description: 'To ensure you don\'t accidentally stop your recording early, confrim your intent to stop the recording.',
    contentType: 'image',
    content: '/images/confirm_recording_end.png',
    actionLabel: 'Continue',
    section: 'Recording an Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'summary',
    title: 'Quick Summary',
    description: 'Shello provides a quick summary after recording, including key insights and your bookmarked moments.',
    contentType: 'image',
    content: '/images/quick_summary.png',
    actionLabel: 'Continue',
    section: 'After Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'full-transcript',
    title: 'Full Transcript with Notes',
    description: 'To view the full interview’s transcript with notes and annotations, click the view full interview button.',
    contentType: 'image',
    content: '/images/view_full_interview.png',
    actionLabel: 'Continue',
    section: 'After Interview',
    backgroundColor: '#212121',
    faq: true
  }, 
  {
    id: 'end',
    title: 'You\'re All Set!',
    description: 'Congratulations, you are ready to start using Shello on your own.',
    contentType: 'none',
    content: '/',
    actionLabel: 'Continue',
    section: 'Onboarding Complete',
    backgroundColor: '#271F16',
    faq: false
  }, 
  

];