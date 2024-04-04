const User = require('../model/user');

const getAllUser = async (req,res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}
const getUserById = async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw Error('User not found');
        res.json(user);
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
}

const deleteUser = async(req,res) => {
    try {
        const id = req.params.id;
        const result = await User.findByIdAndDelete(id);
        if(result) {
            res.json({message:"Xóa thành công"});
        } else {
            res.status(404).json({message : `Ko tìm thấy user có ${id} để xóa`})
        }
    } catch (error) {
        res.status(500).json({message: "Lỗi"})
    }

    
}

const updateUser = async(req,res) => {
    const idUser = req.params.id;
    const updateData = req.body;
    try {
        const result = await User.findByIdAndUpdate(idUser,updateData,{new: true});
        if(result) {
            res.json({message : "Update thành công",data :result});
        } else {
            res.status(404).json({message : `Ko tìm thấy user có ${idUser} để update`})
        }
    } catch (error) {
        res.status(500).json({message : "Lỗi"})
    }
}

module.exports = {getAllUser,deleteUser,updateUser,getUserById};