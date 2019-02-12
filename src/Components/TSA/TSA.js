import React from 'react'
import Landing from '../Landing/Landing'
import MultiCol from '../MultiCol/MultiCol'
import BlockQuote from '../BlockQuote/BlockQuote'
import BrokenGrid from '../BrokenGrid/BrokenGrid'
import BlockSections from '../BlockSections/BlockSections'

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
    <BlockSections />
  </main>
)

export default TSA
