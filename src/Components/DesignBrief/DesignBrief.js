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
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quisquam sunt. Molestiae dolorum at autem veritatis illum tenetur quos, tempore atque quo possimus aliquid eaque! Eos dolor dolore dicta eveniet. In, accusantium quia corporis quod tenetur ducimus nam? Repellat vitae obcaecati numquam nihil voluptates modi repudiandae, eligendi facere fugit molestiae atque amet a ullam iste ratione in! Dolorem, facere dolor.</p>
    </BrokenGrid>
    <Albums />
    <TourDates />
  </main>
)

export default DesignBrief
