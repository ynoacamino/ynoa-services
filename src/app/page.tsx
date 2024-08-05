import ServiceInfo from '@/components/pages/home/ServiceInfo';
import TitleShorter from '@/components/pages/home/Title';

const SERVICES = [
  {
    serviceName: 'Shorter',
    serviceDescription1: 'Introducing our link shortening service, designed to simplify your online sharing experience. With our tool, you can shorten any URL effortlessly without creating an account. Convert long links into concise ones quickly and easily. Perfect for social media, emails, or any situation where shorter links are needed.',
    serviceDescription2: 'You can customize your shortened links with any name. Create memorable links and enhance your online presence effortlessly.',
  },
  {
    serviceName: 'Uploader',
    serviceDescription1: 'Introducing our file uploading service, designed to make sharing your files easier than ever. Upload any file quickly and receive a public link for sharing. No account needed, and the process is fast and straightforward. Perfect for sharing documents, images, or any type of file with others.',
    serviceDescription2: 'Upload your files and get a public link instantly. Share your content effortlessly and efficiently with our user-friendly service.',
  },
  {
    serviceName: 'Alert',
    serviceDescription1: 'Introducing our customizable alert and notification service, designed to keep you informed about important updates. Set up personalized alerts that notify you when the payment slip for tuition at UNSA (Universidad Nacional de San Agustín) is ready for your specified professional career. Stay updated effortlessly with our easy-to-use service.',
    serviceDescription2: 'Receive notifications as soon as your UNSA tuition slip is available. Personalize your alerts and never miss an important update again.',
  },
  {
    serviceName: 'Bot',
    serviceDescription1: "Introducing our Discord bot service, which you can manage entirely from a web page. Control the bot's playlist in a voice channel, create polls, and make announcements. All features are accessible in real-time through the bot's chat, making your server management efficient and seamless.",
    serviceDescription2: "Manage your Discord bot easily from our web interface. Control playlists, create polls, and send announcements instantly. Enhance your server's interaction effortlessly.",
  },
];

export default function Home() {
  return (
    <main className="px-6 w-full max-w-7xl relative">
      <TitleShorter />
      <div className="flex flex-col my-20 gap-32 w-full">
        {
          SERVICES.map((service) => (
            <ServiceInfo {...service} key={crypto.randomUUID()} />
          ))
        }
      </div>
    </main>
  );
}
