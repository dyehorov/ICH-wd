import User from "./User.js"
import Post from "./Post.js"
import Comment from "./Comment.js"

// User - Post
User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" })
Post.belongsTo(User, { foreignKey: "userId" })

//User - Comment
User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" })
Comment.belongsTo(User, { foreignKey: "userId" })

// Post - Comment
Post.hasMany(Comment, { foreignKey: "postId", onDelete: "CASCADE" })
Comment.belongsTo(Post, { foreignKey: "postId" })

export { User, Post, Comment }
