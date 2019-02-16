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
      <p>Tech Day is the first TSA conference of the year and for many students it is their first encounter with TSA competitions. It is a much less "extravagent" than other conferences with fewer competitions and lasting only one day. Tech Day is great to ease new students into the program and warm up older students to the new year ahead. The event takes place at Georgia National Fair Grounds. Competitions at this event include Architectural Design, Transportation Modeling, the Mouse Trap Car Challenge and more.</p>
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
      <p>The Fall Leadership Conference or "Leadercon" is the second TSA conference of the year. Leadercon has fewer events than Tech Day, but it extends over more days. The purpose of Fall Leadership is to teach students new skills through various seminars and workshops on many different subjects. This event is hosted every year at the conference center in Jekyll Island, Gerogia. There are several events to compete in at FLC including, a VEX state qualifying tournament, a Georgia Electrathon Rally, and the Armada Boat Race.</p>
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
      <p>For most students, the State Leadership Conference is the culmination of months of work. It is the main conference of the year in Georgia, and students are offered dozens of events to compete in. This conference is especially important because winners are afforded the opportunity to compete in the National TSA conference. It is hosted every year in Athens, Georgia at the Classic Center. Some of the events include Animatronics, Coding, Flight Endurance, On-demand Video, System Control Technology, and Webmaster.</p>
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
      <p>The TSA National Conference is the final conference of the year. It is probably the most exciting, with students from all around the country coming together to compete against each other. To compete at this event, you must have won your event at the State Leadership Conference. In order to participate, you have to put in a significant amount of work during the school year. This year the National Conference takes place in National Harbor, Maryland near Washington DC.</p>
    </>
  )
]

const activities = [
  {
    src: '/Images/Fundraising.jpg',
    alt: '',
    content: (
      <>
        <h2>Activities & Community Service</h2>
        <p>TSA isn’t just about the competitions, it’s also about things we participate in outside of organized state or national TSA events. In Tucker TSA, our activities are some of our organizations biggest draws. Two examples of these activities include our workshops and our Winter Light Festival. Tucker TSA hosts many workshops directed to both TSA members and the rest of the student body, including Fusion360 classes, teaching how to use the laser engraver and many other things. We also host our annual event known as the Winter Light Festival. The Winter Light Festival occurs every December. We invite the entire community to come together, drink hot chocolate, play games, and purchase lanterns for use in our parade.</p>
        <p>Another primary facet of Tucker TSA is the community service that we participate in. We believe that an organization is pointless if it doesn’t give back to the community. One example of how we achieve this is a road that we adopted. We help to maintain and beautify this road by picking up litter, planting flowers, and generally keeping an eye on it. We also help to establish and assist other programs. Last semester a group of Tucker TSA members went to help the Clarkston library system in their plans to create a vex robotics program. Additionally, we frequently send members to our middle school to help guide and teach members of their TSA chapter.</p>
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
      <p>TSA is a national organization devoted to promoting and developing STEM skills among students. The Tucker TSA chapter has been running for many years now with both teachers and students coming and going as the years have gone by. Tucker High School strongly supports STEM education, with a vibrant TSA club and highly successful VEX teams. Official meetings are held on a weekly basis, but students are allowed to stay after school to work on projects five days a week until at least 6PM. We are always looking for new members, and we host many activities and fundraisers to encourage interest and keep our program alive.</p>
    </BrokenGrid>
    <MultiCol title='History'>
      <p>TSA began its life in 1958, at the time known as AIASA (American Industrial Arts Association). Throughout its years, it has consistently adapted and changed, both in name and in focus. While it began as an organization for industrial arts students, it has evolved into an organization of over 200,000 members with a wide range of competitions and activities. It has greatly expanded over the years through its many partnerships, including with Verizon, SkillsUSA, VEX Robotics, and many other organizations.</p>
      <p>Georgia TSA was first established in 1962, initially known as the Georgia Association of Industrial Arts Clubs. The organization went through many forms until becoming Georgia TSA in 1988, along with the rest of AIASA. In 1989 Fall leadership was created and held at its current location, Jekyll Island for the first time. In 2000 Tech Day was established, and in 2003 CORE was added to the list of Georgia TSA events. In 2008 State Leadership Conference was relocated to the Athens Classic Center where it remains today. Throughout its years, Georgia TSA has remained one of the states with the highest membership, and it has remained competitive at a national level. </p>
      <p>Tucker TSA has been around in its current form since 2011. While not very competitive when we were first established, over the years we have consistently grown better as a program. Throughout many years of both advisors and students, we have managed to maintain our growth. There have been challenges in expanding our program, such as periods of low interest or funding issues, but we have been able to keep our chapter afloat and remain competitive while doing so.</p>
      <p>As of today, Tucker TSA remains one of the most competitive TSA chapters in the state of Georgia. We have been able to keep our program strong for many reasons, including a highly devoted officer team and commitment from our members. Without a combination of both of these factors, our chapter would quickly fall to the wayside. Through attracting equally devoted members and continuing to elect competent officers, we hope to keep Tucker TSA strong for many years to come. </p>
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
