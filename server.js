const app = require('./src/app.js');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app is runing on hels gate ${PORT}`))
