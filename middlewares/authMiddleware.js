import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send({
                success: false,
                message: 'Authorization header missing or invalid'
            });
        }
        
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).send({
                success: false,
                message: 'Token not found'
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err || !decode) {
                return res.status(401).send({
                    success: false,
                    message: 'Invalid token'
                });
            } else {
                req.body.userId = decode.userId;
                next();
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            error,
            message: 'Internal server error'
        });
    }
};

export default authMiddleware;