import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Code, Database, Globe, ExternalLink, Filter, Brain, Users, BookOpen, TestTube } from 'lucide-react';
import SkillRadarChart from '../components/SkillRadarChart';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  links: { text: string; url: string }[];
  type: 'work' | 'education' | 'research' | 'project';
  icon: any;
  group: string;
  startDate: Date;
  endDate: Date | null;
}

const About: React.FC = () => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>(['All']);
  const [showLinks, setShowLinks] = useState(false);

  const skillGroups = useMemo(() => ({
    'Data Science': ['Python', 'PyTorch', 'Scikit Learn', 'NumPy', 'Matplotlib', 'Machine Learning', 'SQL', 'PySpark', 'BeautifulSoup', 'Plotly.js', 'Grafana'],
    'Software Engineering': ['JavaScript', 'TypeScript', 'React', 'Vue', 'Java', 'C++', 'Git', 'Docker', 'AWS', 'OpenShift'],
    'Consulting': ['Design Thinking', 'Presenting', 'Leadership', 'Networking', 'Startup'],
    'Research': ['LaTeX', 'NetworkX', 'Matlab', 'Publishing'],
    'Teaching': ['Grading', 'Mentoring', 'Academic Excellence']
  }), []);



  const groupTextColors = {
    'Data Science': 'text-blue-600 dark:text-blue-400',
    'Software Engineering': 'text-green-600 dark:text-green-400',
    'Consulting': 'text-purple-600 dark:text-purple-400',
    'Research': 'text-red-600 dark:text-red-400',
    'Teaching': 'text-yellow-600 dark:text-yellow-400'
  };

  const groupBgColors = {
    'Data Science': 'bg-blue-100 dark:bg-blue-900/20',
    'Software Engineering': 'bg-green-100 dark:bg-green-900/20',
    'Consulting': 'bg-purple-100 dark:bg-purple-900/20',
    'Research': 'bg-red-100 dark:bg-red-900/20',
    'Teaching': 'bg-yellow-100 dark:bg-yellow-900/20'
  };

  const experiences = useMemo(() => [
    {
      id: 1,
      title: 'FSO Staff Technology Consultant',
      company: 'Ernst & Young LLP',
      period: 'July 2022 – Present',
      description: 'I design software architecture for tech transformation clients and develop proof of concepts internally using React, Python, SQL, and Snowflake for EY.',
      skills: ['SQL', 'Python', 'Grafana', 'Plotly.js', 'Design Thinking', 'Presenting', 'Git', 'JavaScript', 'React', 'Observability', 'OpenShift', 'AWS'],
      links: [{ text: 'To learn more about EY, please click here.', url: 'https://www.ey.com/en_us' }],
      type: 'work',
      icon: Briefcase,
      group: 'Consulting',
      startDate: new Date('2022-07-01'),
      endDate: null,
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Foli-Q',
      period: 'May 2023 – July 2023',
      description: 'I led the development of Foli-Q\'s machine-learning infrastructure and provided technical consultation. While supervising 2 interns, I built an end-to-end pipeline for scraping, processing, persisting, and extracting data at scale. Each week, I presented progress reports covering high-level functionality directly to the CEO. I successfully ended my contract with all objectives met and continue to provide consultation on an ad-hoc basis.',
      skills: ['PyTorch', 'BeautifulSoup', 'Python', 'SQL', 'PySpark', 'Presenting', 'Git', 'Docker'],
      links: [{ text: 'To learn more about the startup, please click here.', url: 'https://foliq.me/' }],
      type: 'work',
      icon: Briefcase,
      group: 'Data Science',
      startDate: new Date('2023-05-01'),
      endDate: new Date('2023-07-01'),
    },
    {
      id: 3,
      title: 'Bachelors of Science Computer Science',
      company: 'Lehigh University',
      period: 'August 2018 – May 2022',
      description: 'Graduating with High Honors (3.79 GPA & 3.97 Major GPA), I recieved my degree in CS. Additionally, I completed 2 minors in data science and entrepreneurship while accruing ~2 years of experience in research and ~4 years experience with small and medium-sized businesses. My merit in academics and entrepreneurship is recognized by the 3 honor societies I was invited to join: Tau Beta Pi, engineering honors society; Upsilon Pi Epsilon, computing and information disciplines honors society; and Baker Entrepreneurial Fellow, distinguished group recognized by Lehigh\'s Baker Institute. Meanwhile, I partipated in the residence hall council for 2 years, worked as a teaching assistant for 3 years, and lead various professional development events.',
      skills: ['Academic Excellence', 'Leadership', 'Teaching', 'Research', 'Entrepreneurship'],
      links: [{ text: 'To learn more about the program details, please click here.', url: 'https://catalog.lehigh.edu/coursesprogramsandcurricula/engineeringandappliedscience/computerscienceandengineering/#undergraduatetext' }],
      type: 'education',
      icon: GraduationCap,
      group: 'Teaching',
      startDate: new Date('2018-08-01'),
      endDate: new Date('2022-05-01'),
    },
    {
      id: 4,
      title: 'Machine Learning Research Assistant',
      company: 'Nano-Human Interfaces Laboratory',
      period: 'May 2021 – May 2022',
      description: 'Collaborating in interdisciplinary research, I set out to predict anomalies in crystalline material microstructures using deep learning algorithms. Every week, I provided progress reports to Dr. Martin Harmer, NHI Director; Dr. Brian Chen, my principal investigator; Dr. Lifang He, NHI machine learning specialist; and other colleagues. My main contribution was the develpment of a graph convolutional recurrent neural network model.',
      skills: ['PyTorch', 'NumPy', 'Scikit Learn', 'Python', 'NetworkX', 'Presenting', 'Git'],
      links: [
        { text: 'To learn more about the project, please click here.', url: 'https://www.mkmachado.com/projects' },
        { text: 'To learn more about the lab, please click here.', url: 'https://nhi.lehigh.edu/' }
      ],
      type: 'research',
      icon: Code,
      group: 'Data Science',
      startDate: new Date('2021-05-01'),
      endDate: new Date('2022-05-01'),
    },
    {
      id: 5,
      title: 'Selected Participant',
      company: 'Lehigh Silicon Valley',
      period: 'January 2022',
      description: 'Lehigh Silicon Valley is the Baker Institute\'s flagship week-long winter term program immersing students in the Bay Area entrepreneurial ecosystem. During the program, I delivered use case presentations to various startup CEOs, such as vArmour and Pipcorn. Additionally, I had the pleasure of speaking with VMware and Adobe Inc. executive management. Most notably, I had the opportunity to speak with former Adobe Inc. CMO Ann Lewnes.',
      skills: ['Entrepreneurship', 'Presenting', 'Networking', 'Leadership'],
      links: [
        { text: 'To learn more about the program details, please click here.', url: 'https://www.lehighbakerinstitute.com/lsv' },
        { text: 'To learn more about my cohort, please click here.', url: 'https://www.lehighbakerinstitute.com/lsv' }
      ],
      type: 'education',
      icon: GraduationCap,
      group: 'Consulting',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-01-31'),
    },
    {
      id: 6,
      title: 'Teaching Assistant: Software Engineering course (CSE216)',
      company: 'Lehigh University Computer Science & Engineering Department',
      period: 'January 2021 – May 2022',
      description: 'For 3 semesters, I assisted in teaching the software engineering course at Lehigh University. Each week, I mentored 5 teams on full-stack applications. I helped facilitate recitations consisting of ~75 students on design patterns. As for my biggest contribution, I worked with Professor Liang Cheng and Professor Mark Erle to help modernize the curriculum which had been over 5 years old.',
      skills: ['SQL', 'Grading', 'Presenting', 'Git', 'JavaScript', 'Java', 'TypeScript', 'React'],
      links: [{ text: 'For the course description, please click here.', url: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-216-software-engineering-3' }],
      type: 'education',
      icon: GraduationCap,
      group: 'Teaching',
      startDate: new Date('2021-01-01'),
      endDate: new Date('2022-05-01'),
    },
    {
      id: 7,
      title: 'Lead Developer',
      company: 'Capstone: Smart COPD Patient Monitoring System',
      period: 'January 2021 - December 2021',
      description: 'As a student sponsor, I lead a team of computer science students in the development of a chronic obstructive pulmonary disease (COPD) patient monitoring system: a web application that utilized commercial off-the-shelf devices (COTS) to measure biodata from individuals suffering from COPD and applied a decision tree supervised machine learning algorithm to classify the risk of COPD patients returning to the hospital within 30 days. As the team\'s lead developer, I gained experience with Vue, Java Spark, PostgreSQL, Python machine learning libraries, leading a team of 4 undergraduate students, and acting as a liaison between other universities involved with our project (Worcester Polytechnic Institute and University of Toledo).',
      skills: ['Scikit Learn', 'Python', 'SQL', 'Design Thinking', 'Presenting', 'Git', 'C++', 'Vue', 'JavaScript', 'Java', 'TypeScript', 'React'],
      links: [],
      type: 'project',
      icon: Code,
      group: 'Software Engineering',
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-12-01'),
    },
    {
      id: 8,
      title: 'Research Assistant',
      company: 'Learning and Optimization on Networks and Graphs Laboratory',
      period: 'April 2020 – May 2021',
      description: 'While investigating pervasive solutions for road surveillance, I developed 10 novel game theoretical incentive mechanisms to promote user participation. Using C++ and Python, I generated over 10 million simulations and visualized the results in Matplotlib. Every week, I would present my work to Professor Liang Cheng and his lab to collect feedback. After augmenting my findings with 2 deep learning algorithms, I was published as 1st author in a textbook chapter.',
      skills: ['Matplotlib', 'Python', 'Matlab', 'Git', 'C++', 'LaTeX'],
      links: [
        { text: 'To view the published textbook chapter, please click here.', url: 'https://www.degruyter.com/document/doi/10.1515/9783110785982-025/html?lang=en' },
        { text: 'To learn more about the lab (now known as CHENGS), please click here', url: 'https://liangcheng.info/long-lab/' }
      ],
      type: 'research',
      icon: Code,
      group: 'Research',
      startDate: new Date('2020-04-01'),
      endDate: new Date('2021-05-01'),
    },
    {
      id: 9,
      title: 'Research Experience for Undergraduates (REU)',
      company: 'Advanced Technology for Large Structural Systems Engineering Research Center',
      period: 'May 2020 – August 2020',
      description: 'As part of my research experience for undergraduates, I helped create a distributed sensing platform where users are incentivized to collect accelerometer and camera data. Additionally, I helped developed an Android application that used a MobileNet SSD image classifier to automate road flagging. Twice a week, I presented my progress to REU program leaders and other REU students. Finally, I presented and published my findings in the CIAMTIS conference as a technical report.',
      skills: ['Matlab', 'Publishing', 'Presenting', 'Git', 'C++'],
      links: [
        { text: 'To learn more about the program details, please click here.', url: 'https://atlss.lehigh.edu/outreach/research-experience-undergraduates-reu' },
        { text: 'To learn more about the technical report, please click here.', url: 'https://rosap.ntl.bts.gov/view/dot/56366' }
      ],
      type: 'research',
      icon: Code,
      group: 'Research',
      startDate: new Date('2020-05-01'),
      endDate: new Date('2020-08-01'),
    },
    {
      id: 10,
      title: 'Teaching Assistant: Applied Engineering Computer Methods Course (ENGR010)',
      company: 'Lehigh University P.C Rossin College of Engineering & Applied Science',
      period: 'August 2019 – May 2020',
      description: 'For 2 semesters, I assisted in teaching an applied engineering course for undergraduate engineering students looking to learn Arduino and Matlab. Each week I would grade 80 code submissions and every other week I taught recitations on digital/analog IO devices for ~40 students. Most notably, I collaborated with the course instructors on designing the final projects and judged 20 final project submissions for water pumps and assembly lines.',
      skills: ['Matlab', 'Grading', 'Presenting', 'Arduino'],
      links: [{ text: 'For the course description, please click here.', url: 'https://catalog.lehigh.edu/courselisting/engr/' }],
      type: 'education',
      icon: GraduationCap,
      group: 'Teaching',
      startDate: new Date('2019-08-01'),
      endDate: new Date('2020-05-01'),
    },
    {
      id: 11,
      title: 'Selected Participant',
      company: 'The Hatchery',
      period: 'May 2019 – August 2019',
      description: 'The Hatchery is a 3 month long idea accelerometer focused on providing participates resouces for building their startup ideas. In my case, I developed a startup called TrussNet. TrussNet was a solution to the problem many undergraduates face, "how do I pick the right major for me." The Java based application factored in a student\'s career interests and hobbies to rank potential majors. During the program, TrussNet won 1st place in 2 competitions and was awarded over $600 for development.',
      skills: ['Design Thinking', 'Presenting', 'Startup', 'Java'],
      links: [
        { text: 'To learn more about the program details, please click here.', url: 'https://www.lehighbakerinstitute.com/hatchery' },
        { text: 'To learn more about my cohort, please click here.', url: 'https://www.lehighbakerinstitute.com/hatchery-projects19' },
        { text: 'To see my thoughts on the program, please click here.', url: 'https://www.lehighbakerinstitute.com/post/saying-yes-to-any-opportunity' }
      ],
      type: 'project',
      icon: Code,
      group: 'Consulting',
      startDate: new Date('2019-05-01'),
      endDate: new Date('2019-08-01'),
    },
  ], []);

  const groupIcons = {
    'Data Science': Brain,
    'Software Engineering': Code,
    'Consulting': Users,
    'Research': TestTube,
    'Teaching': BookOpen,
  };

  const skills = [
    { name: 'JavaScript/TypeScript', icon: Code, level: 90 },
    { name: 'React/Next.js', icon: Code, level: 85 },
    { name: 'Python', icon: Code, level: 90 },
    { name: 'SQL/NoSQL', icon: Database, level: 85 },
    { name: 'Machine Learning', icon: Code, level: 80 },
    { name: 'AWS/Cloud', icon: Globe, level: 75 },
    { name: 'Git/Version Control', icon: Code, level: 95 },
    { name: 'Teaching/Mentoring', icon: GraduationCap, level: 85 },
    { name: 'Research', icon: Code, level: 80 },
    { name: 'Leadership', icon: Briefcase, level: 85 },
  ];

  // Filter experiences based on selected groups
  const filteredExperiences = useMemo(() => {
    if (selectedGroups.includes('All')) return experiences;
    return experiences.filter(exp => 
      selectedGroups.includes(exp.group)
    );
  }, [selectedGroups, experiences]);

  // Calculate years of experience per group
  const groupExperience = useMemo(() => {
    const now = new Date();
    const groupYears: { [key: string]: number } = {};
    
    Object.keys(skillGroups).forEach(group => {
      groupYears[group] = 0;
    });

    filteredExperiences.forEach(exp => {
      const endDate = exp.endDate || now;
      const years = (endDate.getTime() - exp.startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      
      if (groupYears[exp.group] !== undefined) {
        groupYears[exp.group] += years;
      }
    });

    return Object.entries(groupYears)
      .filter(([_, years]) => years > 0)
      .sort((a, b) => b[1] - a[1]);
  }, [filteredExperiences, skillGroups]);

  // Calculate skill distribution for current selection
  const skillDistribution = useMemo(() => {
    const skillCount: { [key: string]: number } = {};
    
    // Initialize all skills
    Object.values(skillGroups).flat().forEach(skill => {
      skillCount[skill] = 0;
    });
    
    filteredExperiences.forEach(exp => {
      exp.skills.forEach(skill => {
        if (skillCount[skill] !== undefined) {
          skillCount[skill]++;
        }
      });
    });

    return Object.entries(skillCount)
      .filter(([_, count]) => count > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5); // Top 5 skills
  }, [filteredExperiences, skillGroups]);

  const handleGroupToggle = (group: string) => {
    if (group === 'All') {
      setSelectedGroups(['All']);
    } else {
      setSelectedGroups(prev => {
        const newGroups = prev.filter(g => g !== 'All');
        if (newGroups.includes(group)) {
          const filtered = newGroups.filter(g => g !== group);
          return filtered.length === 0 ? ['All'] : filtered;
        } else {
          return [...newGroups, group];
        }
      });
    }
  };

  // Helper function to get skill group
  const getSkillGroup = (skill: string) => {
    for (const [group, skills] of Object.entries(skillGroups)) {
      if (skills.includes(skill)) {
        return group;
      }
    }
    return null;
  };



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm a passionate software engineer and researcher with expertise in machine learning, full-stack development, and technology consulting.
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <div className="space-y-6">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-accent-orange to-accent-purple p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-800 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-400 dark:text-gray-600">YN</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a technology consultant at Ernst & Young with a strong background in machine learning, 
            software engineering, and research. With experience leading teams, teaching, and developing 
            innovative solutions, I specialize in creating impactful technology solutions that drive business value.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-accent-orange" />
              <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-accent-orange" />
              <span className="text-gray-600 dark:text-gray-300">5+ years of experience</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-accent-orange" />
          <span className="text-gray-600 dark:text-gray-300">Filter by expertise area:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleGroupToggle('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              selectedGroups.includes('All')
                ? 'bg-accent-orange text-white'
                : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
            }`}
          >
            <span>All</span>
          </button>
          {Object.entries(skillGroups).map(([group, skills]) => {
            const Icon = groupIcons[group as keyof typeof groupIcons];
            return (
              <button
                key={group}
                onClick={() => handleGroupToggle(group)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  selectedGroups.includes(group)
                    ? 'bg-accent-orange text-white'
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{group}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center">
                  <exp.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-accent-orange">{exp.period}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Expertise Area */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Expertise Area:</span>
                      <span
                        className={`px-3 py-1 ${groupBgColors[exp.group as keyof typeof groupBgColors]} ${groupTextColors[exp.group as keyof typeof groupTextColors]} text-xs rounded-full flex items-center space-x-1`}
                      >
                        {React.createElement(groupIcons[exp.group as keyof typeof groupIcons], { className: "h-3 w-3" })}
                        <span>{exp.group}</span>
                      </span>
                    </div>
                  </div>

                  {/* Skills Organized by Group */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill) => {
                      const skillGroup = getSkillGroup(skill);
                      if (skillGroup) {
                        return (
                          <span
                            key={skill}
                            className={`px-2 py-1 text-xs rounded-full ${groupBgColors[skillGroup as keyof typeof groupBgColors]} ${groupTextColors[skillGroup as keyof typeof groupTextColors]}`}
                          >
                            {skill}
                          </span>
                        );
                      }
                      return (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  {/* Links Toggle */}
                  {exp.links.length > 0 && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowLinks(!showLinks)}
                        className="flex items-center space-x-2 text-accent-orange hover:text-orange-600 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>{showLinks ? 'Hide Links' : 'Show Links'}</span>
                      </button>
                      
                      {showLinks && (
                        <div className="mt-2 space-y-2">
                          {exp.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-accent-orange hover:text-orange-600 transition-colors duration-200 text-sm"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>{link.text}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Experience Summary */}
      {groupExperience.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Years of Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupExperience.map(([group, years], index) => {
              const Icon = groupIcons[group as keyof typeof groupIcons];
              return (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-accent-orange" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">{group}</h3>
                  </div>
                  <div className="text-3xl font-bold text-accent-orange mb-2">
                    {years.toFixed(1)} years
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <div
                      className="bg-accent-orange h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${Math.min((years / Math.max(...groupExperience.map(([_, y]) => y))) * 100, 100)}%` 
                      }}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Skill Distribution Chart */}
      {skillDistribution.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skill Distribution
          </h2>
          
          {/* Radar Chart */}
          <div className="mb-8">
            <SkillRadarChart 
              skills={Object.entries(skillGroups).map(([group, skills]) => {
                const groupSkillCount = skills.reduce((total, skill) => {
                  const skillData = skillDistribution.find(([s, _]) => s === skill);
                  return total + (skillData ? skillData[1] : 0);
                }, 0);
                return {
                  name: group,
                  value: groupSkillCount,
                  maxValue: Math.max(...Object.entries(skillGroups).map(([g, s]) => 
                    s.reduce((total, skill) => {
                      const skillData = skillDistribution.find(([sk, _]) => sk === skill);
                      return total + (skillData ? skillData[1] : 0);
                    }, 0)
                  ))
                };
              })}
              size={400}
            />
          </div>

          {/* Bar Chart */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                {skillDistribution.map(([skill, count], index) => (
                  <div key={skill} className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </div>
                    <div className="flex-1 bg-gray-200 dark:bg-dark-700 rounded-full h-3">
                      <div
                        className="bg-accent-orange h-3 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${Math.min((count / Math.max(...skillDistribution.map(([_, c]) => c))) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm text-gray-500 dark:text-gray-400 text-right">
                      {count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Core Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <skill.icon className="h-6 w-6 text-accent-orange" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                <div
                  className="bg-accent-orange h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About; 