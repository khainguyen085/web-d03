import { v4 as uuidv4 } from 'uuid';

let accounts = [];

export const getAccounts = (req,res) =>{
    res.send(accounts);
}

export const createAccount = (req,res)=>{
    const account = req.body;

    accounts.push({id: uuidv4(), ...account });

    res.send(`Account with the name: ${account.name} and password: ${account.password} added to the database!`);
}