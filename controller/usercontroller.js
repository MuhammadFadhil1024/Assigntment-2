const express = require('express');
const fs = require('fs');
// const app = express();
const users = require("../users.json")
const { generateToken } = require("../helper/jwt")

class usercontroller{
    static async register (req, res){
        try {

            const {
                email, password
            } = req.body
    
            const user = {
                email,
                password
            }
    
            fs.readFile("users.json", 'utf-8', (err, data) => {
                if (err) {
                    throw err
                }
                let users = []
                if (data) {
                    users = JSON.parse(data)
                }
                users.push(user)
    
                fs.writeFile("users.json", JSON.stringify(users), 'utf-8', (err) => {
                    if(err) throw err
    
                })
            })
    
            const access_token = generateToken(user)
    
            res.status(201).json({access_token})
            
        } catch (error) {
             console.log(error);
        }
    }

    static async getAllUser (req ,res){

        try {

            fs.readFile("users.json", 'utf-8', (err, data) => {
                if (err){
                    return res.status(500).send('Error reading file');
                }

                res.status(200).send(data)
            })
            
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = usercontroller