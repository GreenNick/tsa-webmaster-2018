import React from 'react'
import Landing from '../Landing/Landing'
import BrokenGrid from '../BrokenGrid/BrokenGrid'
import BlockSections from '../BlockSections/BlockSections'
import Teachers from '../Teachers/Teachers'
import SquiggleSection from '../SquiggleSection/SquiggleSection'

const pathways = [
  (
    <>
      <h3>Engineering</h3>
      <p>This pathway is designed to teach students the fundamentals of Engineering. Students will learn about the Engineering Design Process and apply it to complete projects. Anyone who is joining the Tucker STEM program is required to go through this pathway.</p>
      <h4>Classes</h4>
      <ul>
        <li>Foundations of Engineering & Technology</li>
        <li>Engineering Concepts</li>
        <li>Engineering Applications</li>
      </ul>
    </>
  ),
  (
    <>
      <h3>Audio-Video Technology</h3>
      <p>The Audio-Video pathway prepares students for jobs in television and film production. Students are taught about operating film equipment, safety, production principles, lighting, and editing. Students are also instructed on how to behave in a professional environment, so they can act properly with a job.</p>
      <h4>Classes</h4>
      <ul>
        <li>Audio-Video Technology and Film I</li>
        <li>Audio-Video Technology and Film II</li>
        <li>Audio-Video Technology and Film III</li>
      </ul>
    </>
  ),
  (
    <>
      <h3>Web and Digital Design</h3>
      <p>The Web and Digital Design pathway teaches students how to design and build websites and online interactive media. These courses provide instruction on digital technology and help prepare students for a career in web development. Students will learn how to build websites from scratch using HTML, CSS, and JavaScript.</p>
      <h4>Classes</h4>
      <ul>
        <li>Introduction to Digital Technology</li>
        <li>Fundamentals of Web Design</li>
        <li>Advanced Web Design</li>
      </ul>
    </>
  ),
  (
    <>
      <h3>Entrepreneurship</h3>
      <p>This pathway provides students with the technical and leadership skills required to run a small business. Students will learn about business technologies and how to use them ethically and effectively. They will also learn about financial management and how to make decisions when running a business.</p>
      <h4>Classes</h4>
      <ul>
        <li>Introduction to Business & Technology</li>
        <li>Legal Environment of Business</li>
        <li>Entrepreneurial Ventures</li>
      </ul>
    </>
  ),
  (
    <>
      <h3>Marketing and Management</h3>
      <p>This course pathway provides students with the knowledge and experience necessary to work in the marketing field. Students will learn how to manage interactions between consumers and businesses, and utilize technology for digital marketing. Students will engage in problem based learning projects for these classes.</p>
      <h4>Classes</h4>
      <ul>
        <li>Marketing Principles</li>
        <li>Marketing and Entrepreneurship</li>
        <li>Marketing Management</li>
      </ul>
    </>
  )
]

const projects = [
  {
    src: '/Images/Projects.jpg',
    alt: '',
    content: (
      <>
        <h2>Student Projects</h2>
        <p>Tucker’s CTE program participates in many projects in the school and in the community. Three of these projects include the lake, the garden, and the greenhouse. The Tucker High School STEM Program has been rehabilitating Kelly Cofer Lake since the program’s inception. While the lake has seen better days, the STEM program has noticeably improved it by doing many projects such as sediment removal, planting plants to remove excess nitrogen, and reintroducing native species that had dies out in years past. As a result of the Tucker STEM Program’s involvement, Kelly Cofer Lake is in better condition than it has been in many years.</p>
        <p>Another project that the Tucker STEM Program has spearheaded is the Pollinator Garden. The Pollinator Garden is a garden in Kelly Cofer Park that was created and is maintained by the Tucker STEM Program. It is a collection of non-invasive flowers, bushes, and trees that are aimed towards providing a food source and habitat for a multitude of pollinators. It was created about three years ago, and it has been a great success.</p>
        <p>One final project Tucker High School’s CTE Program has played a part in is our school’s newly constructed greenhouse and aquaponics garden. This project is still in progress, but so far has been a great success. We have fabricated a greenhouse out of a wooden frame and greenhouse panels. This part is completely done. However, what is still in progress is the solar power aquaponics garden. This will involve a small garden and a fish habitat. The plants will purify the water for the fish to live in, and the fish will provide nitrogen to help fertilize the plants. Once this project is done, we expect it to be very impressive and a testament to the skill of the Tucker CTE Program.</p>
      </>
    )
  }
]

const CTE = () => (
  <main>
    <Landing
      title='Career & Technology / Engineering Program'
      tagline='' />
    <BrokenGrid
      title='Tucker STEM Program'
      src='/Images/Stem.jpg'
      alt=''>
      <p>The Tucker STEM Program was established four years ago by our teacher Ms. Todd. In that time we have done impressive work in our local community and helped to better incorporate STEM subjects into our daily curriculum. We have worked extensively at our local lake, monitoring the ecosystem and trying to control volatile algal blooms. We have created a pollinator garden near the lake and we are constructing a greenhouse at our school. In the STEM program, we have a focus on hands-on and problem based learning projects to teach. We are currently in the process of trying to get our program certified which we hope to achieve soon.</p>
    </BrokenGrid>
    <Teachers />
    <BlockSections title='Career Pathways' blocks={pathways} />
    <SquiggleSection sections={projects} />
  </main>
)

export default CTE
