import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Get in Touch</h1>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

