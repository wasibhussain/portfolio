export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  Skills: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'HeySmarty',
    repo: '#',
    url: '#',
    image:
      '/images/hey_smarty.png',
    description: 'Developed HeySmarty, an AI-powered mobile app for intelligent query responses, featuring speech-to-text, voice-to-voice, dark/light themes, and font resizing. Integrated secure logins with Google, Apple, and custom sign-ins. Enabled chat categorization, local saving, and custom folder creation. Fine-tuned ChatGPT with business data for tailored responses and optimized performance.',
    Skills: ['Flutter', 'Dart', 'Speech-to-Text', 'Firebase', 'REST API', 'Google and Apple Sign-in']
  },
  {
    name: 'Nutri-west',
    repo: '#',
    url: '#',
    image:
      '/images/nutriwest.png',
    description: "Developed a mobile app for NutriWest with comprehensive features. Users can navigate and search for products by category, ingredient, or health condition. Implemented an intuitive 'Add to Cart' functionality, push notifications, and optimized heavy images for performance. Created an iOS version for consistent cross-platform experience. Deployed on Play Store and Apple Store.",
    Skills: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Push Notifications', 'iOS/Android Deployment']
  },
  {
    name: 'SRSO',
    repo: '#',
    url: '#',
    image:
      '/images/SRSO_logo.png',
    description: 'Developed the SRSO App, a mobile solution for complaint registration, CNIC verification, and SMS OTP for enhanced security. Integrated email and password authentication, and enabled users to submit complaints with text, voice, video, and document uploads. Added functionality to allow users to view and track their complaints in real-time, improving transparency and communication.',
    Skills: ['Flutter', 'Dart', 'Firebase Authentication', 'SMS OTP', 'REST API', 'File Upload']
  },
  {
    name: 'Bag Saver',
    repo: '#',
    url: '#',
    image:
      '/images/bag saver.jpg',
    description: 'Built a background location service app that sends reminders when users are near their saved destinations, offering real-time tracking and notification customization.',
    Skills: ['Flutter', 'Dart', 'Location Services', 'Background Services', 'Push Notifications']
  }
];


export const skillsData = [
  {
    img: 'flutter/flutter-original.svg',
    name: 'Flutter'
  },
  {
    img: 'dart/dart-original.svg',
    name: 'Dart'
  },
  {
    img: 'kotlin/kotlin-original.svg',
    name: 'Kotlin'
  },
  {
    img: 'android/android-original.svg',
    name: 'Android'
  },
  {
    img: 'apple/apple-original.svg',
    name: 'iOS'
  },
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'mariadb/mariadb-original.svg',
    name: 'MariaDB'
  },
  {
    img: 'googlecloud/googlecloud-original.svg',
    name: 'Google Cloud Platform'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'tensorflow/tensorflow-original.svg',
    name: 'TensorFlow'
  },

]
