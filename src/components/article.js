import React from 'react'
import {Link} from 'gatsby'
import styles from  './_article.module.scss'


const Article = ({ path, keyword, title, date, excerpt }) => {
   return(
      <article className={styles.articleBox}>
         <div className={styles.left}>
            <img src={'https://source.unsplash.com/150x150/?' + keyword} alt={title} />
         </div>
         <div className={styles.right}>
            <h3>
               {title}
            </h3>
            <div className={styles.date}>{date}
            </div>
            <div>
               {excerpt}
            </div>
            <div className={styles.more}>
            <Link to={path}>Read More</Link>
            </div>
         </div>
      </article>
   )
}

export default Article


/* Batas */
/*
export default (props) => (

   <Link to={props.to}>
      <article className={styles.articleBox} key={props.id}>
         <div className={styles.left}>
            <img src={'https://source.unsplash.com/150x150/?' + props.keywords} alt={props.title} />
         </div>
         <div className={styles.right}>
            <h3>
               {props.title}
            </h3>
            <div className={styles.date}>{props.date}
            </div>
            <div>
               {props.excerpt}
            </div>
         </div>
      </article>
   </Link>

)

*/