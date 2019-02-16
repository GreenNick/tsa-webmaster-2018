import React from 'react'
import BrokenGrid from '../BrokenGrid/BrokenGrid'
import DesignBriefLanding from '../DesignBriefLanding/DesignBriefLanding'
import Albums from '../Albums/Albums'
import TourDates from '../TourDates/TourDates'

const DesignBrief = () => (
  <main>
    <DesignBriefLanding
      title='Jonah Fields'
      tagline='Professional Guitarist' />
    <BrokenGrid
      title='Biography'
      src='/Images/Jonah.jpg'
      alt=''>
      <p>Jonah Fields began his musical path to greatness as a humble novice guitarist. While he played from time to time, he did not have the passion of a true musician. However, throughout his difficult high school years, he began to rely on music as a way to cope with calculus class. In time, this led him to grow far more skilled. Today, Jonah is a revolutionary metal guitarist who redefines music with each album. Hundreds of thousands of fans compete to attend his concerts, and his music is heavily analyzed by any who consider themselves well-versed in music. Jonah Fields is a modern prodigy, with all the class of Beethoven, the skill of Mozart, and the lyrical genius of Jake Paul.</p>
    </BrokenGrid>
    <Albums />
    <TourDates />
  </main>
)

export default DesignBrief
