const MemberModel = require("./memberModel");

const getMembers = () => {
  return new Promise((resolve, reject) => {
    MemberModel.find({}, (err, data) => {
      err && reject(err);
      data && resolve(data);
    });
  });
};

const getMember = (ID) => {
  return new Promise((resolve, reject) => {
    MemberModel.findById(ID, (err, data) => {
      err && reject(err);
      data && resolve(data);
    });
  });
};

const addMember = async (obj) => {
  let member = new MemberModel({
    fullName: obj.fullName,
    id: obj.id,
    city: obj.city,
    street: obj.street,
    houseNumber: obj.houseNumber,
    dateOfBirth: obj.dateOfBirth,
    phone: obj.phone,
    cellphone: obj.cellphone,
    // imageUrl: obj.imageUrl,

    vaccines: obj.vaccines,
    dateOfIllness: obj.dateOfIllness,
    dateOfRecovery: obj.dateOfRecovery,
  });
  // console.log(vaccines); 
    member.save((e) => {
    if (e) console.log(e);
  });
};


//שאילתות לשאלת בונוס סעיף 3
const getActivePatientsLastMonth = async () => {
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

  const count = await MemberModel.countDocuments({
    dateOfIllness: { $gte: lastMonth },
    dateOfRecovery: { $eq: null }
  });

  return count;
};

const getUnvaccinatedMembers = async () => {
  const count = await MemberModel.countDocuments({
    vaccines: { $size: 0 }
  });

  return count;
};



module.exports = {
  getMembers,
  getMember,
  addMember,
  getActivePatientsLastMonth,
  getUnvaccinatedMembers,
};
