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
    src: '#',
    alt: '',
    content: (
      <>
        <h2>Student Projects</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda, cum voluptatum debitis exercitationem cumque iste voluptates nihil quod a eius enim quam saepe quidem sed vitae delectus aspernatur ipsa! Illum beatae placeat architecto cumque non temporibus, inventore officia eius nostrum natus nobis tenetur est modi veniam dolorum! Repudiandae aliquam in, voluptas atque aliquid est aperiam nobis illo natus eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde sint iusto facilis provident vero voluptatibus enim! Deleniti, dolor eum, quod earum necessitatibus ut est quisquam numquam, minus autem consequatur! Repellat veritatis aspernatur facilis facere, incidunt doloribus magnam officiis sint harum sapiente ducimus pariatur dicta hic assumenda quas ad iste velit fugiat voluptas? Reprehenderit nesciunt error quam tenetur numquam fuga.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur omnis libero. Perferendis eaque repellat sequi, molestias maxime officiis. Fugiat, consectetur? Corrupti rerum veritatis quasi eligendi reprehenderit sunt soluta laudantium. Ex odio quia quidem distinctio labore sapiente sequi necessitatibus! Molestias esse vero sit placeat voluptate. Natus non ad totam autem corrupti porro sit est, voluptate minima rem, itaque maiores nostrum?</p>
      </>
    )
  }
]

const CTE = () => (
  <main>
    <Landing
      title='Career and Technology/Engineering Program'
      tagline='' />
    <BrokenGrid
      title='Tucker STEM Program'
      src='#'
      alt=''>
      <p>The Tucker STEM Program was established four years ago by our teacher Ms. Todd. In that time we have done impressive work in our local community and helped to better incorporate STEM subjects into our daily curriculum. We have worked extensively at our local lake, monitoring the ecosystem and trying to control volatile algal blooms. We have created a pollinator garden near the lake and we are constructing a greenhouse at our school. In the STEM program, we have a focus on hands-on and problem based learning projects to teach. We are currently in the process of trying to get our program certified which we hope to achieve soon.</p>
    </BrokenGrid>
    <Teachers />
    <BlockSections title='Career Pathways' blocks={pathways} />
    <SquiggleSection sections={projects} />
  </main>
)

export default CTE
