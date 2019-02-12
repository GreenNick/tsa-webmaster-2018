import React from 'react'
import styles from './BlockSections.module.css'

const BlockSections = () => (
  <section>
    <div className={styles.container}>
      <h2 className={styles.heading}>Competitions</h2>
      <div className={styles.block}>
        <h3>Technology Day</h3>
        <p>October 8, 2018</p>
        <p>
          Reaves Arena<br />
          401 Golden Isles Pkwy<br />
          Perry, GA 31069
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
      </div>
      <div className={styles.block}>
        <h3>Fall Leadership Conference</h3>
        <p>November 9-11, 2018</p>
        <p>
          Jekyll Island Conference Center<br />
          1175 Beachview Dr N<br />
          Jekyll Island, GA 31527
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
      </div>
      <div className={styles.block}>
        <h3>State Leadership Conference</h3>
        <p>March 14-16, 2019</p>
        <p>
          The Classic Center<br />
          300 N Thomas St<br />
          Athens, GA 30601
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
      </div>
      <div className={styles.block}>
        <h3>National Conference</h3>
        <p>June 28 - July 2, 2019</p>
        <p>
          Gaylord National Resort<br />
          201 Waterfront St<br />
          National Harbor, MD 20745
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae, aliquam ipsum impedit illum sint nemo sapiente labore soluta nulla sed natus praesentium dolorem architecto repellendus, earum autem perferendis necessitatibus?</p>
      </div>
    </div>
  </section>
)

export default BlockSections
