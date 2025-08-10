const router = require('express');

router = Router();

router.get('users', getUsers);

module.exports = router;