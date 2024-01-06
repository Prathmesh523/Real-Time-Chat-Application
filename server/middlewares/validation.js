import jwt from 'jsonwebtoken'

const userDetails = async (req, res, next) => {
    try {
        const token = req.body.token
        const details = await jwt.verify(token, process.env.SECRET_KEY)
        if (details) {
            req.body=[details.username, details.password]
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
