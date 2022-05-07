import styles from './PostForm.module.scss'
const PostForm = () => {
    return (
        <form className={styles.formPost}>
            <textarea className={styles.formContent}></textarea>
            <button className={styles.formButton}>Add New Tweet</button>
        </form>
    )
}
export default PostForm;