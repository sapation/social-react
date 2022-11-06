import './createPost.css'

const CreatePost = () => {
  return (
    <div className="create-post">
        <div className="profile-photo">
            <img src="../images/profile-1.jpg" alt="" />
        </div>
        <input type="text" placeholder="What's on your mind, Diana" id="create-post"/>
        <input type="submit" value="Post" className="btn btn-primary" />
    </div>
  )
}

export default CreatePost