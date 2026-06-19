import fs from 'fs'
import imagekit from '../configs/imageKit.js'
import Blog from '../models/Blog.js'
import Comment from '../models/Comment.js'

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog)
        const imageFile = req.file

        // CHECK IF ALL FIELDS ARE PRESENT
        if (!title || !description || !category || !isPublished) {
            return res.json({
                success: false,
                message: "Missing Required Field"
            })
        }


        const fileBuffer = fs.readFileSync(imageFile.path)

        console.log("Buffer length:", fileBuffer.length);
        console.log("Filename:", imageFile.originalname);

        const response = await imagekit.files.upload({

            // UPLOAD IMAGE TO IMAGEKIT
            file: fileBuffer.toString("base64"),
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        // OPTIMIZATION THROUGH IMAGE KIT URL TRANSFORMAATION
        /*
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },  // AUTO COMPRESSION
                { format: 'webp' }, // CONVERT TO MODERN FORMAT
                { width: '1280' } // WIDTH RESIZING
            ]
        })

        const image = optimizedImageUrl
         */

        const image = `${response.url}?tr=w-1280,f-webp,q-auto`;

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        })

        return res.json({
            success: true,
            message: 'Blog Added Successfully'
        })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true })
        return res.json({
            success: true,
            blogs
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}


export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params
        const blog = await Blog.findById(blogId)

        if (!blog) {
            return res.json({
                success: false,
                message: 'Blog Not Found'
            })
        }
        return res.json({
            success: true,
            blog
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}


export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body
        await Blog.findByIdAndDelete(id)

        // DELETE ALL COMMENTS ASSOCIATED WITH THE BLOG
        await Comment.deleteMany({blog: id})

        return res.json({
            success: true,
            message: 'Blog Deleted successfully'
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}


export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body
        const blog = await Blog.findById(id)
        blog.isPublished = !blog.isPublished
        await blog.save()

        return res.json({
            success: true,
            message: 'Blog Status Updated'
        })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

export const addComent = async (req, res) => {
    try {
        const { blog, name, content } = req.body
        await Comment.create({ blog, name, content })

        return res.json({
            success: true,
            message: 'Comment added for review'
        })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}


export const getBlogComments = async (req,res) => {
    try {
        const { blogId } = req.body
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({
            createdAt: -1
        })

        return res.json({
            success: true,
            comments
        })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}