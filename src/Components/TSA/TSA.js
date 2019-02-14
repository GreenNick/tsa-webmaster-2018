import React from 'react'
import Landing from '../Landing/Landing'
import MultiCol from '../MultiCol/MultiCol'
import BlockQuote from '../BlockQuote/BlockQuote'
import BrokenGrid from '../BrokenGrid/BrokenGrid'
import BlockSections from '../BlockSections/BlockSections'
import SquiggleSection from '../SquiggleSection/SquiggleSection'
import List from '../List/List'

const competitions = [
  (
    <>
      <h3>Technology Day</h3>
      <p>October 8, 2018</p>
      <p>
        Reaves Arena<br />
        401 Golden Isles Pkwy<br />
        Perry, GA 31069
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
    </>
  ),
  (
    <>
      <h3>Fall Leadership Conference</h3>
      <p>November 9-11, 2018</p>
      <p>
        Jekyll Island Conference Center<br />
        1175 Beachview Dr N<br />
        Jekyll Island, GA 31527
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
    </>
  ),
  (
    <>
      <h3>State Leadership Conference</h3>
      <p>March 14-16, 2019</p>
      <p>
        The Classic Center<br />
        300 N Thomas St<br />
        Athens, GA 30601
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
    </>
  ),
  (
    <>
      <h3>National Conference</h3>
      <p>June 28 - July 2, 2019</p>
      <p>
        Gaylord National Resort<br />
        201 Waterfront St<br />
        National Harbor, MD 20745
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
    </>
  )
]

const activities = [
  {
    src: '/Images/Fundraising.jpg',
    alt: '',
    content: (
      <>
        <h2>Activities</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda, cum voluptatum debitis exercitationem cumque iste voluptates nihil quod a eius enim quam saepe quidem sed vitae delectus aspernatur ipsa! Illum beatae placeat architecto cumque non temporibus, inventore officia eius nostrum natus nobis tenetur est modi veniam dolorum! Repudiandae aliquam in, voluptas atque aliquid est aperiam nobis illo natus eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde sint iusto facilis provident vero voluptatibus enim! Deleniti, dolor eum, quod earum necessitatibus ut est quisquam numquam, minus autem consequatur! Repellat veritatis aspernatur facilis facere, incidunt doloribus magnam officiis sint harum sapiente ducimus pariatur dicta hic assumenda quas ad iste velit fugiat voluptas? Reprehenderit nesciunt error quam tenetur numquam fuga.</p>
      </>
    )
  },
  {
    src: '#',
    alt: '',
    content: (
      <>
        <h2>Community Service</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda, cum voluptatum debitis exercitationem cumque iste voluptates nihil quod a eius enim quam saepe quidem sed vitae delectus aspernatur ipsa! Illum beatae placeat architecto cumque non temporibus, inventore officia eius nostrum natus nobis tenetur est modi veniam dolorum! Repudiandae aliquam in, voluptas atque aliquid est aperiam nobis illo natus eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde sint iusto facilis provident vero voluptatibus enim! Deleniti, dolor eum, quod earum necessitatibus ut est quisquam numquam, minus autem consequatur! Repellat veritatis aspernatur facilis facere, incidunt doloribus magnam officiis sint harum sapiente ducimus pariatur dicta hic assumenda quas ad iste velit fugiat voluptas? Reprehenderit nesciunt error quam tenetur numquam fuga.</p>
      </>
    )
  }
]

const TSA = () => (
  <main>
    <Landing
      title='Tucker High School TSA'
      tagline='Learning to Lead in a Technical world' />
    <BrokenGrid
      title='Our Chapter'
      src='/Images/SchoolLandscape.jpg'
      alt='Landscape of Tucker High School'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ea asperiores sapiente voluptate reprehenderit soluta at odio officia autem veniam repellat iusto, ratione fugit eius est, ex sed harum eveniet? Atque neque quibusdam, corrupti ad, similique mollitia ratione suscipit quod ipsa eum amet illum et commodi aspernatur aut rerum voluptatum cupiditate animi eaque. Doloribus, alias nihil? Magnam, omnis exercitationem. Tempore.</p>
    </BrokenGrid>
    <MultiCol title='History'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis adipisci sequi neque repellat excepturi tempore inventore ratione, deserunt exercitationem repudiandae reprehenderit, quam molestias assumenda iste non culpa provident repellendus voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi aspernatur numquam soluta quam voluptate! Enim, unde, eius doloremque facilis non ducimus, dolores libero atque dolor distinctio obcaecati omnis at?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore animi quidem provident. Minima eveniet nostrum fuga repellendus sunt atque, facere molestias corrupti, quasi dolore aliquam, hic nemo. Excepturi, asperiores! Sapiente deserunt ratione quaerat cum magni blanditiis voluptatum et, expedita pariatur, recusandae commodi consequatur iusto possimus. Exercitationem consectetur nemo excepturi officiis qui quos recusandae adipisci impedit nobis optio. Sapiente, omnis?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad distinctio eveniet officia repudiandae ea architecto voluptates numquam, beatae necessitatibus sit at nobis expedita in incidunt eos? Dolores distinctio sint aliquam! Praesentium dicta rerum suscipit reprehenderit. Voluptates nemo, recusandae temporibus sapiente id voluptate sunt laboriosam fugiat minima est tenetur corporis inventore reprehenderit ea? Architecto expedita, eligendi natus delectus perspiciatis quasi illo?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad distinctio eveniet officia repudiandae ea architecto voluptates numquam, beatae necessitatibus sit at nobis expedita in incidunt eos? Dolores distinctio sint aliquam! Praesentium dicta rerum suscipit reprehenderit. Voluptates nemo, recusandae temporibus sapiente id voluptate sunt laboriosam fugiat minima est tenetur corporis inventore reprehenderit ea? Architecto expedita, eligendi natus delectus perspiciatis quasi illo?</p>
    </MultiCol>
    <BlockQuote
      title='TSA Creed' cite='https://tsaweb.org/about/about-tsa/mission'>
      <p>I believe that Technology Education holds an important place in my life in the technical world. I believe there is a need for the development of good attitudes concerning work, tools, materials, experimentation, and processes of industry. Guided by my teachers, artisans from industry, and my own initiative, I will strive to do my best in making my school, community, state, and nation better places in which to live.</p>
      <p>I will accept the responsibilities that are mine. I will accept the theories that are supported by proper evidence. I will explore on my own for safer, more effective methods of working and living. I will strive to develop a cooperative attitude and will exercise tact and respect for other individuals. Through the work of my hands and mind, I will express my ideas to the best of my ability. I will make it my goal to do better each day the task before me, and to be steadfast in my belief in my God, and my fellow Americans.</p>
    </BlockQuote>
    <BlockSections title='Competitions' blocks={competitions} />
    <SquiggleSection sections={activities} />
    <List title='Awards & Finalists 2018' />
  </main>
)

export default TSA
