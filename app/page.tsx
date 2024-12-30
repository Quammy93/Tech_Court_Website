import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">Crafting digital experiences with passion and precision</p>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">What I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Web Development"
                description="Creating responsive and performant websites using the latest technologies."
                icon="🌐"
              />
              <FeatureCard
                title="UI/UX Design"
                description="Designing intuitive and beautiful user interfaces for optimal user experience."
                icon="🎨"
              />
              <FeatureCard
                title="Mobile Apps"
                description="Developing cross-platform mobile applications for iOS and Android."
                icon="📱"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">Let's collaborate and bring your ideas to life!</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

