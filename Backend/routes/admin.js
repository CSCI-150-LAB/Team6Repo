const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose'); 

const mongoose = require('mongoose');
AdminBro.registerAdapter(AdminBroMongoose); 
const FoodItem = require("../models/FoodItems");


const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  resources: [
    { resource: FoodItem
    },
  ],
  branding: {
    logo: 'https://i.redd.it/aoh4z6fwold21.png',
    companyName: 'Authentic Chef',
  },

  
})

const ADMIN = { 
  email: process.env.ADMIN_EMAIL || 'admin@example.com', 
  password: process.env.ADMIN_PASSWORD || 'omegashenron',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro', 
  cookiePassword: process.env.ADMIN_COOKIE_PASSWORD || 'superomegashenron', 
  authenticate: async (email, password) => { 
    if (email === ADMIN.email && password === ADMIN.password){ 
      return ADMIN
    }
    return null
  }
})

module.exports = router; 