"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [ {
      id: 1,
      title: "Front-end Developer",
      company: "Mastermind tours and travels",
      location: "Dhaka, Bangladesh",
      period: "01/01/2024 – Current",
      description: "Designed and enhanced B2B and admin dashboards for travel operations with focus on performance optimization and clean architecture.",
      achievements: [
        "Designed and enhanced B2B and admin dashboards for travel operations",
        "Delivered real-time inventory management, booking features, and streamlined admin workflows",
        "Ensured pixel-perfect UI and responsive layout across devices",
        "Prioritized performance optimization and clean architecture for scalability"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "RTK Query", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Front-end Developer",
      company: "Hisab-Khata",
      location: "Dhaka, Bangladesh",
      period: "01/04/2023 – 30/12/2023",
      description: "Developed and maintained user-friendly POS interfaces with robust form validation and state management.",
      achievements: [
        "Developed and maintained user-friendly POS interfaces",
        "Integrated form validation using React Hook Form & Yup for robust user input handling",
        "Managed state and asynchronous API interactions using RTK Query",
        "Collaborated closely with backend engineers to ensure seamless feature integration"
      ],
      technologies: ["TypeScript", "React", "RTK Query", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Front-end Developer",
      company: "W3S Cloud Technology",
      location: "Dhaka, Bangladesh",
      period: "01/12/2021 – 30/01/2023",
      description: "Built custom CRM portals and integrated third-party APIs for comprehensive business workflow automation.",
      achievements: [
        "Built custom CRM portals for managing projects, clients, and financial transactions",
        "Integrated Zoho APIs for real-time data visualization, reporting, and task tracking",
        "Developed a payment processing module and a Zoho-based image gallery",
        "Automated business workflows and improved user experience through intuitive interfaces"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Material UI"],
    },
  ]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in frontend development, showcasing growth, achievements, and the impact I've made
            at each organization.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-lg text-primary font-semibold mb-2">{experience.company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.6, delay: index * 0.2 + achievementIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + techIndex * 0.05 }}
                            >
                              <Badge variant="secondary">{tech}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
