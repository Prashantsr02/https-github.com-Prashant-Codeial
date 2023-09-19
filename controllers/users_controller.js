const user = require('../model/users')

module.exports.profile = function (req, res) {
    return res.render('users', {
        title: "Users"
    })
}
module.exports.signup = function (req, res) {
    return res.render('sign_up', {
        title: 'SignUp'
    })
}
module.exports.signin = function (req, res) {
    return res.render('sign_in', {
        title: 'SignIn'
    })
}

//for get the signup data

module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    user.findOne({ email: req.body.email }, function (err, User) {
        if (err) { console.log('error in finding user for signup'); return }

        if (!User) { 
            user.create(req.body, function (err, User) {    
                if (err) { console.log('error in creating user in DB'); return }

                return res.redirect('/users/signin');

            });
        }
        else {
            return res.redirect('back');
        }
    })


}



// //sign-in and create a session for user
module.exports.createsession = function (req, res) {
    //finding user
    user.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in finding user for signin');
            return
        }
        //If User present
        if (user) {
            //Password does not match
            if (user.password != req.body.password) {
                return res.redirect('/users/signin');
            }
            else {
                //Password matched the send cookie with response and redirect to profile page
                res.cookie('user_id', user.id);
                return res.redirect('/users/profie');
            }
        }
        else {
            return res.redirect('back');
        }

    });
}

// module.exports.auth=function(req,res){
    
//     if(user.findById({email:req.body.email})

// }


