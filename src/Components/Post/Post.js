import styles from './Home.module.scss'
import { FaHeart, FaShareAlt, FaClock } from 'react-icons/fa'
const Post = ({ content, date, user, time }) => {
    return (
        <>
            {console.log()}
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
                    <FaClock />
                    {date}
                </li>
                <li className={styles.postsMetaTime}>
                    {time}
                </li>
            </ul>
        </>
    )
}
export default Post;