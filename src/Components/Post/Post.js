import styles from './Home.module.scss'
import { FaHeart, FaShareAlt } from 'react-icons/fa'
const Post = ({ content, date, user }) => {
    return (
        <>

            <h4> {user}  </h4>
            <p className={styles.postsContent}>
                {content}
            </p>
            <ul className={styles.postsMeta}>
                <li className={styles.postsMetaDate}>
                    <FaHeart />
                    34
                </li>
                <li className={styles.postsMetaDate}>
                    <FaShareAlt />
                    Share
                </li>
                <li className={styles.postsMetaDate}>
                    {date}
                </li>
            </ul>
        </>
    )
}
export default Post;