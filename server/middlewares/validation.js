import jwt from 'jsonwebtoken'

const userDetails = async (req, res, next) => {
    try {
        const token = req.body
        const details = await jwt.verify(token, process.env.SECRET_KEY)
        if (details) {
            res.json({status:true, data:details})
            next()
        }
        else {
            return res.json({status:false, message:"Token Invalid"})
        }
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}
export default userDetails
