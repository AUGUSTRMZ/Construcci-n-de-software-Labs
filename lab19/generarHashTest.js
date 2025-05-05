const bcrypt = require('bcryptjs');

(async () => {
    const hash = await bcrypt.hash('123456', 10); // Puedes cambiar la contraseña
    console.log('Hash:', hash);
})();
