const dummy = (blogs) => {
    if(Array.isArray(blogs))
        return 1
    return 0
}

const totalLikes = (blogs) => {
    const likesReducer = (sumLikes, blog) => {
        return sumLikes + blog.likes
    }

    return blogs.length === 0
        ? 0
        : blogs.reduce(likesReducer, 0)
}

const favoriteBlog = (blogs) => {
    const maxLikesReducer = (favBlog, blog) => {
        return blog.likes > favBlog.likes
            ? blog
            : favBlog
    }

    return blogs.length === 0
        ? {}
        : blogs.reduce(maxLikesReducer, blogs[0])
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}