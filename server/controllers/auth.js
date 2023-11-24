const bcrypt = require("bcrypt");
//models import kraye so that db se interaction ho paye!!

const User = require("../models/user");  //error aara tha!!
const jwt = require("jsonwebtoken");
const { options } = require("../routes/user");

//Signup route handler
exports.signup = async(req,res) =>{
    try
    {
        //get data
        const {name,email,password,role} = req.body;

        //---Check if user already exists--
        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({
                success:false,
                message:'user already Exists',
            });
        }

        //secure password --
        let hashedpassword;

        try{
            hashedpassword = await bcrypt.hash(password,10); //10 is no of rounds
        }
        catch(err)
        {
            return res.status(500).json({
                success:false,
                message :'Error in hashing password',
            }); 
        }
    
    //--Create entry for user---
    const user = await User.create({
        name,email,password:hashedpassword,role
    })

    return res.status(200).json({
        success:true,
        message:'user created successfully',
    });

    }

    catch(error)
    {
        console.log(error);
        return res.status(500).json({
        success: false,
        message:'user cannot be registered,please try again later',
    });

    }
}


//login route handler
exports.login = async (req,res) => {
    try {

        //data fetch
        const {email, password} = req.body;
        //validation on email and password
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:'PLease fill all the details carefully',
            });
        }

        //check for registered user
        let user = await User.findOne({email});
        //if not a registered user
        if(!user) {
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        };
        //verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password) ) {
            //password match then create jwt token
            let token =  jwt.sign(payload, 
                                'Shhhhh',
                                {
                                    expiresIn:"2h",
                                });

                                

            user = user.toObject(); //ye nhi daalre toh error aara
            user.token = token;
            user.password = undefined;//password hide kr diya !!

            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in successfully',
            });
        }
        else {
            //passwsord do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });

    }
}

