import { useAuth } from '../../hooks/useAuth';
import styles from './PostForm.module.scss'
const PostForm = ({ onSubmit }) => {
    const { user } = useAuth();
    const handleOnSubmit = (e) => {
        const { currentTarget } = e;
        const field = Array.from(currentTarget.elements)
        const data = {}
        field.forEach(field => {
            if (!field.name) return;
            data[field.name] = field.value;

        })
        if (typeof onSubmit === 'function') {
            onSubmit(data, e)
        }
    }
    return (
        <form onSubmit={handleOnSubmit} className={styles.formPost}>
            <input className={styles.inputName} name="account" value={user && user.email} />
            <textarea name="content" placeholder="" className={styles.formContent}></textarea>
            <button className={styles.formButton}>Add New Tweet</button>
        </form>
    )
}
export default PostForm;