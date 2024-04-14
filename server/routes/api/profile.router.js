const router = require('express').Router();
const { User, Profile } = require('../../db/models');

router.get('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const profile = await Profile.findOne({where: {id}})
        res.status(200).json({message: 'success', profile});
    } catch ({message}) {
        console.log(message);
    }
})
router.put('/:id', async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        let { name, lastName, age, phoneNumber, img } = req.body;
        
         await Profile.update({ name, lastName, age, phoneNumber, img }, {
            where: { id },
            fields: ['name', 'lastName', 'age', 'phoneNumber', 'img'] 
        });

        const profile = await Profile.findOne({ where: { id } });
        res.status(200).json({ message: 'success', profile });
    } catch ({ message }) {
        console.log(message);
        res.status(500).json({ message: 'Ошибка при обновлении профиля' });
    }
});

module.exports = router;