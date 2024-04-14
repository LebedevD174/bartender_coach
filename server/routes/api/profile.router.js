const router = require('express').Router();
const { User, Profile } = require('../../db/models');

router.get('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const profile = await Profile.findOne({where: {id}})
        console.log(profile);
        res.status(200).json({message: 'success', profile});
    } catch ({message}) {
        console.log(message);
    }
})
router.put('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const {name, lastName, age, phoneNumber, img} = req.body;
        const profile = await Profile.update({name, lastName, age, phoneNumber, img}, {where: {id}})
        console.log(profile);
        res.status(200).json({message: 'success', profile});
    } catch ({message}) {
        console.log(message);
    }
})

module.exports = router;