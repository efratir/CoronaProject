const mongoose = require("mongoose")
const Joi = require("joi");

let MemberSchema = new mongoose.Schema({
    fullName: String,
    id : String,
    city: String,
    street: String,
    houseNumber: Number,
    dateOfBirth: Date,
    phone: String, 
    cellphone: String,
       
      
    
    // imageUrl: String
    vaccines:
    [{
        date: {
            type: Date,          
        },
              
        creator: {
            type: String,
        },

    }],
    // makerOfVaccines:
    //     [{
    //         type: String
    //         ,
    //         validate: {
    //             validator: function (v, x, z) {
    //                 return !(this.makerOfVaccines.length > 4);
    //             },
    //             message: props => `${props.value} exceeds maximum array size (4)!`
    //         },
    //     }],
    dateOfIllness: Date,
    dateOfRecovery: Date,

})

let member = mongoose.model("members", MemberSchema)

function validateMember(member) {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        id: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.Number().required(),
        dateOfBirth: Joi.Date().required(),
        phone: Joi.string().min(9).max(11).required(),
        cellphone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),

        vaccines: {
            data: Joi.array().max(4).items
            (Joi.object({
                date: Joi.Date(),
                creator: Joi.string(),
                
            })),
        },
        dateOfIllness: Joi.Date().required(),
        dateOfRecovery: Joi.Date().required(),

    });
    return schema.validate(member);
}



exports.member = member;
exports.validateMember = validateMember;

module.exports = member;