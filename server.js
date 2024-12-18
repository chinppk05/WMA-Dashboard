const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// เสิร์ฟไฟล์ Static จากโฟลเดอร์ 'public'
app.use(express.static(path.join(__dirname, 'public')));

// เสิร์ฟหน้าเว็บจากไฟล์ HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
