const fs = require('fs');
//conecta con los datos de user.json
const user = {
        fileName: './database/users.json',
        getaData: function() {
            return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
        },
//genera id para el usuario
    generateId: function(){
        let allUsers= this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id +1;
        }
       return 1;
    },  
//encuentra a todos los usuarios
findAll: function(){
return this.getaData();
},
//encuentra por id
findByPk: function (id){
    let allUsers= this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id ===id);
    return userFound;
},
//encuentra por texto
findByField: function(field, text){
    let allUsers= this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field]=== text);
    return userFound;
},
//crear al usuario
        create: function(userData) {
            let allUsers= this.findAll();
            let newUser={
                id: this.generateId(),
                ...userData
            }
            allUsers.push(newUser);
            fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
            return newUser;
        },
        //elimina al usuario
        delete: function(id){
            let allUsers= this.findAll();
            let findAllUsers= allUsers.filter(oneUser=> oneUser.id !== id); 
            fs.writeFileSync(this.fileName, JSON.stringify(findAllUsers, null, ' '));
            return true;
        }

    }
module.exports= user;