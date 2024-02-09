const express=require('express');

const router=express.Router();
const Wallet = require('../models/wallet');


router.get('/:id',async(req,res)=>{
    const userId = req.params.id;
    Wallet.findOne({ wallet_id: userId })
        .then((wallet) => {
            if (wallet) {
                const walletObj = {
                    wallet_id: wallet.wallet_id,
                    balance: wallet.balance,
                    wallet_user: {
                        user_id: wallet.wallet_user.user_id,
                        user_name: wallet.wallet_user.user_name
                    }
                };
                res.status(200).json(walletObj);
            } else {
                res.status(404).json({ message: 'wallet with id: '+userId+' was not found'});
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        });
})

router.put('/:wallet_id', async (req, res) => {
    const walletId = req.params.wallet_id;
    const rechargeAmount = req.body.recharge;

    if (!Number.isInteger(rechargeAmount) || rechargeAmount < 100 || rechargeAmount > 10000) {
        return res.status(400).json({ message: 'invalid amount: '+rechargeAmount });
    }

    Wallet.findOneAndUpdate(
        { wallet_id: walletId },
        { $inc: { balance: rechargeAmount } },
        { new: true, select: '-_id wallet_id balance wallet_user' }
    )
    .then((wallet) => {
        if (wallet) {
            const walletObj = {
                wallet_id: wallet.wallet_id,
                wallet_balance: wallet.balance,
                wallet_user: {
                    user_id: wallet.wallet_user.user_id,
                    user_name: wallet.wallet_user.user_name
                }
            };
            res.status(200).json(walletObj);
        } else {
            res.status(404).json({ message: 'wallet with id: '+walletId+' was not found' });
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

module.exports = router;