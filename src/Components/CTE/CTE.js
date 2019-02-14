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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam eius, similique, dicta dignissimos facere repellendus dolore rerum, deleniti neque excepturi in error esse consequatur fuga ipsam vel. Debitis, alias.</p>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam eius, similique, dicta dignissimos facere repellendus dolore rerum, deleniti neque excepturi in error esse consequatur fuga ipsam vel. Debitis, alias.</p>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam eius, similique, dicta dignissimos facere repellendus dolore rerum, deleniti neque excepturi in error esse consequatur fuga ipsam vel. Debitis, alias.</p>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam eius, similique, dicta dignissimos facere repellendus dolore rerum, deleniti neque excepturi in error esse consequatur fuga ipsam vel. Debitis, alias.</p>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam eius, similique, dicta dignissimos facere repellendus dolore rerum, deleniti neque excepturi in error esse consequatur fuga ipsam vel. Debitis, alias.</p>
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
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ea asperiores sapiente voluptate reprehenderit soluta at odio officia autem veniam repellat iusto, ratione fugit eius est, ex sed harum eveniet? Atque neque quibusdam, corrupti ad, similique mollitia ratione suscipit quod ipsa eum amet illum et commodi aspernatur aut rerum voluptatum cupiditate animi eaque. Doloribus, alias nihil? Magnam, omnis exercitationem. Tempore.</p>
    </BrokenGrid>
    <Teachers />
    <BlockSections title='Career Pathways' blocks={pathways} />
    <SquiggleSection sections={projects} />
  </main>
)

export default CTE
