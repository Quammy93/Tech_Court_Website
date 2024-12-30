import Image from 'next/image';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Html', level: 85 },
  { name: 'CSS', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Prisma', level: 65 },
  { name: 'PostgreSQL', level: 60 },
  { name: 'React', level: 85 },
  { name: 'GraphQL', level: 55 },
  { name: 'Docker', level: 50 },
  { name: 'Kubernetes', level: 45 },
  { name: 'CI/CD', level: 35 },
  { name: 'Next.js', level: 20 },
  { name: 'Tailwind CSS', level: 60 },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <Image
            src="/placeholder.svg"
            alt="A portrait of [Your Name]"
            width={400}
            height={400}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Biography</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hello! I'm a <span className="font-bold text-gray-800 dark:text-white">passionate web developer</span> with over 2 years of experience in creating modern, responsive, and user-friendly websites.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new hiking trails or experimenting with new recipes.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills?.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  title={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
