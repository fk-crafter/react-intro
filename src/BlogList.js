import {Link} from 'react-router-dom'

const BlogList = ({blogs, allBlogs, handleDelete}) => {
    return ( 
        <div className="blog-list">

            <h2>{allBlogs}</h2>
                    
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>

                <p>Written by {blog.author}</p>
                </Link>

                
            </div>
         ))}
        </div>
     );
}
 
export default BlogList;