import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h1>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  )
}

