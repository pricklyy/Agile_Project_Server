const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async(req,res) => {
    try {
        const { username, password } = req.body;
    
        // Tìm người dùng theo tên người dùng
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // So sánh mật khẩu
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // Tạo token xác thực
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key');
    
        res.json({ token });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

const register = async(req,res) => {
    try {
        const { username, email, password, numberphone, role } = req.body;
    
        // Kiểm tra xem người dùng đã tồn tại hay chưa
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
          return res.status(400).json({ error: 'Username or email already exists' });
        }
    
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Tạo người dùng mới
        const user = new User({ username, email, password: hashedPassword, numberphone, role });
        await user.save();
    
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}


// Middleware xác thực token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'secret_key', (error, user) => {
      if (error) {
        return res.status(403).json({ error: 'Invalid token' });
      }
  
      req.user = user;
      next();
    });
  };

  module.exports = {login,register,authenticateToken}